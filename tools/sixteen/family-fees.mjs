// family-fees.mjs: pre-run 8's hop fee per family, three tiers around the payments' 150 sompi per gram.
// Floor, families 1-6, pay 100 (under the payments). Double, families 7-11, pay 200 (over). Triple, families 12-16,
// pay 300 (twice the payments). Payments pay 150. Genesis (built once by hash-sixteen.mjs) stays at 200.
// Pre-run 7 ran 1-13 at 100 and 14-16 at 200; pre-run 8 steps the fee so the landing per tier answers the congestion question.
export const FLOOR_RATE = 100;
export const DOUBLE_RATE = 200;
export const TRIPLE_RATE = 300;
export const PAY_RATE = 150;
export const GENESIS_RATE = 200;
export const TIERS = [
  { cohort: "floor", rate: FLOOR_RATE, from: 1, to: 6 },
  { cohort: "double", rate: DOUBLE_RATE, from: 7, to: 11 },
  { cohort: "triple", rate: TRIPLE_RATE, from: 12, to: 16 },
];
export const COHORTS = TIERS.map((t) => t.cohort);
export function familyRate(family) {
  const f = Number(family);
  const t = Number.isInteger(f) ? TIERS.find((x) => f >= x.from && f <= x.to) : null;
  if (!t) throw new Error("family " + family + " is not 1..16");
  return t.rate;
}
export const cohortOfFamily = (family) => TIERS.find((t) => t.rate === familyRate(family)).cohort;
export const cohortOfRate = (rate) => (TIERS.find((t) => t.rate === Number(rate)) || {}).cohort || null;
export const FEE_SPLIT_LINE = TIERS.map((t) => `${t.cohort}=${t.from}-${t.to}:${t.rate}`).join(" ");
// The family list in a run config must say the same rates. Returns [] when it does, else the families that differ.
export function feeTableMisses(families) {
  return (families || []).filter((f) => Number(f.fee_sompi_per_gram) !== familyRate(f.family)).map((f) => Number(f.family));
}
// The one hop line for the builder: the rate rides on each hop, so one builder process carries every tier.
export const hopLine = (key, coin, nonce, family) => `hop ${key} ${coin.txid} ${coin.index} ${coin.amount} ${nonce} ${familyRate(family)}`;
