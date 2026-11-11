> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 8.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1, 2, 3, 4, 5, 6, or 7. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-8

**Pre-run 8 of the Wednesday neuron.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it. [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) (Tuesday) is not edited from here either.

**Where this starts.** Pre-runs 1 to 4 failed and are closed. Pre-runs 5, 6, and 7 finished through RETURN and are closed. The index of all of them, with what each one showed, is the [pre-run 2 README](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2#pre-runs-in-this-rehearsal). This repo starts from [pre-run 7's locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-7/blob/0dcd3c5/locks/LOCKED.md) at commit 0dcd3c5, copied here as [locks/LOCKED.md](locks/LOCKED.md), with a pre-run 8 section added at the end.

## What pre-run 7 left open

Pre-run 7 met HOLD-1, HOLD-2, HOLD-3, and RETURN as desk submit-OK. That says the desk could send at those rates. It does not say the network took them: in HOLD-2 to HOLD-4 the blocks seemed to carry less than the desk submitted, the covenant families nearly stopped landing, and Mini's node fell behind, so there was no chain count from HOLD-3 on.

## What pre-run 8 tries

We want an inclusion count, minute by minute, next to the submit count, and a look at how covenant hops with different fees land when the blocks are full.

- **(iv) The desk's own node counts.** On 2026-11-11 the operator agreed that the desk's private TN10 node does the counting. A read-only counter on that node takes what the chain accepted, per minute by accepting chain block time, and sorts it into our payments, our families by fee tier, coinbase, and other traffic. Each sample it also checks the desk node against a kept public kaspad (DAA gap and sink age). A minute where the node fell behind is marked, and nothing is filled in. This node also serves the families, so it might fall behind under load; if so, the marks are meant to show it. Mini still counts as a second read, and its file heads say what Mini read itself.
- **(v) Three fee tiers.** Families 1–6 pay 100 sompi/gram, 7–11 pay 200, 12–16 pay 300. Payments pay 150. In pre-run 7, both 100 and 200 nearly stopped under the payment load; a third tier at twice the payment fee may show where a covenant keeps moving, if it does.
- **Kept as before.** The payment offers (1,013, 2,027, 3,040, one minute at 4,053, then 1,013) are not lowered. They seem to run from under to over what the blocks took in pre-run 7, which is the range the question needs. Scoring is still three clean minutes of submit-OK, or `NOT MET` after one repair. Inclusion is reported, not scored. The bot sends in HOLD-4 only if a third unique public kaspad is free; in every check so far there were only two, so a `NO SEND` is expected.

All locked lines from earlier pre-runs stay: no runner restart mid-run, children detached, a family stall is not dirt, a full mempool returns the coin, the repair starts missing senders and hands pools off, git retries with a local FAILED file, unique kaspads, the abort line, the desk node is never stopped.

## Machines

| Machine | Go file | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send and count on pre-run 8. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 8 as the second read. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 8 HOLD-4 only. I do not count. This is not Wednesday. |

The operator does not paste. On 2026-11-11 he said to start everything, keep experimenting, and continue until the goals are met; that is the arm. The agents start the runners once the gates are facts. [GO.md](GO.md) is the map, [PLAYBOOK.md](PLAYBOOK.md) has the roles and gates, and [plan/PLAN.md](plan/PLAN.md) has the targets.

## Gates, in order

No clock. Each gate is a fact read from a node or from origin.

1. Mini's TN10 node is up from its own data, synced, DAA moving.
2. The desk's private TN10 node is up from its own data (PowerShell 7), synced, DAA moving.
3. No other runner or waiter is up. The lane is above the abort line (2,500 coins, 18,000 usable tKAS).
4. `hashes/SIXTEEN.md` is on origin: sixteen rows and an On origin line, from the sixteen-family path.
5. The desk pushes `logs/PRE-RUN-OPEN.md`; Mini pushes `logs/MINI-ARMED.md`.
6. The desk counter is up. Then the families, then the payment steps.

## What a decent result is

- `hashes/SIXTEEN.md` on origin before the first family submit.
- HOLD-1 met.
- Every step file carries submit-OK and an inclusion count per minute, each minute marked kept pace or lagging.
- Floor, double, and triple hops per minute in every file.
- A HOLD-4 desk file, a bot file or a legal `NO SEND`, and a Mini file.
- No id, txid, key, address, host, or port in this repo.

A miss stays in this repo. A next attempt is a new repo and starts from this repo's lock file.

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** The rule is [docs/NEURON.md](https://github.com/STP-KAS/tn-master/blob/main/docs/NEURON.md). This pre-run is its own row. It is not row 47.
