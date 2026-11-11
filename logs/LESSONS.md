> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Pre-run 8.

# Lessons, pre-run 8

> Written by the operator after RETURN closed and the counter's tail was read. [METHOD.md](METHOD.md) is the desk runner's own summary and is not rewritten. Included counts below are the desk counter's read of the desk's private TN10 node ([counts/chain/TIMELINE.md](../counts/chain/TIMELINE.md)). They are one node's view of the accepted chain, checked against a public kaspad every 10 s, not a network-wide figure.

## What happened

Every step closed on its first three minutes, with no repair. The runner was not restarted, nothing was killed, and every count file reached origin on the first try. No `FAILED` file was written. The desk node was not stopped.

| Step | Offer, tx/s | Desk head | Submit-OK per scored minute | Our payments included, same minutes | Hops included floor / double / triple (sum of the scored minutes) | Desk file on origin (UTC) |
|---|---:|---|---|---|---|---|
| HOLD-1 | 1,013 | MET | 61,308 / 60,700 / 60,741 | 60,076 / 60,705 / 61,016 | 527 / 493 / 541 | 23:21:22Z |
| HOLD-2 | 2,027 | MET | 121,360 / 121,406 / 121,257 | 124,238 / 121,299 / 121,619 | 7 / 50 / 139 | 23:25:22Z |
| HOLD-3 | 3,040 | MET | 183,938 / 181,974 / 182,403 | 128,489 / 120,297 / 112,502 | 146 / 120 / 161 | 23:29:22Z |
| HOLD-4 | 4,053 | OBSERVATION | 234,063 (pinned minute 23:33Z) | 113,639 | 0 / 21 / 70 | 23:34:23Z |
| RETURN | 1,013 | MET | 60,994 / 60,804 / 60,812 | 121,778 / 120,141 / 119,936 | 0 / 307 / 365 | 23:38:21Z |

The bot filed `NO SEND no-free-node` for HOLD-4 (on origin 23:34:04Z): in its pass at 23:32:31Z, every answering public endpoint was one of the desk's two kept kaspads.

## What this seems to show

- **The counter kept pace.** In all 26 whole minutes it read (23:17Z to 23:42Z; the start minute was partial and the last tail minute not final, as marked), the desk node stayed within 7 DAA of the kept public kaspad, its sink was never more than about 1.2 s old, and each minute was final about 20 s after its end. No minute was marked `LAGGING`. Serving the sixteen families and the counter on one node did not make it fall behind at these loads.
- **Block space on TN10 in these minutes was about 110,000–132,000 accepted transactions a minute (roughly 1,800–2,200 tx/s).** HOLD-1 sat under it and was included as sent. HOLD-2 sat about at it: our payments were included as sent, but almost nothing else was. HOLD-3 and HOLD-4 were over it: inclusion stayed in that band while submit-OK rose to 182,000 and 234,000. The excess waited in mempools and drained at the same band through RETURN and the tail. By the end of the tail all 2,742,944 payment submit-OKs had been included.
- **Other users' traffic was pushed out while the backlog lasted.** "Other traffic" read about 2,500–3,200 a minute in HOLD-1 to the start of HOLD-3, then 7 to 30 a minute from 23:29Z to 23:39Z, and came back to about 3,000 once our backlog cleared (23:41Z). Our 150 sompi/gram payments seem to have outbid it.
- **Fee order shows, but fee alone did not keep a covenant moving.** At every congested step triple (300) landed more than double (200), and double more than floor (100). But from HOLD-2 on even the triple tier fell to a fraction of its HOLD-1 rate (about 180 hops a minute in HOLD-1; 36–53 in HOLD-2; 20–81 in HOLD-3; 70 in HOLD-4), although it paid twice the payment fee. Median submit-to-landing per hop: HOLD-1 floor 1.7 s, double 1.6 s, triple 1.4 s; HOLD-2 floor 43 s, double 10.6 s, triple 4.5 s. The floor families stopped landing from 23:29Z and had no hop submitted in HOLD-4 or RETURN (a chained hop waits for its parent); a few floor hops landed in the tail once the backlog cleared. Double and triple came back in RETURN to about 110–125 hops a minute each while the backlog was still draining.
- A guess, not tested here: if the block template picks transactions with a weight by fee rate rather than strictly highest first, a higher fee would raise a hop's odds without guaranteeing it, which would look like this. The path also differs: payments went straight to two public kaspads, families to the desk's private node, which then has to relay them. This run cannot tell those apart.
- **Mini's second read is not comparable to the desk's.** Mini read all minutes in full this time (heads `READ`), but its figures sit above the desk's (for example HOLD-1 non-coinbase about 75,000–84,000 against the desk's 64,000–65,000, and hop counts about twice the desk's). Mini's counter keys a transaction by accepting block and id and does not take removed chain blocks back out, so a transaction accepted, removed, and accepted again seems to be counted twice. The desk counter is the inclusion figure for this repo.

## Spend

- Payment fees: the pile's coin total went from 203,070.28 tKAS (pre-run 7's end snapshot, the start of this run) to 196,388.47 tKAS (this run's end snapshot): 6,681.81 tKAS for 2,742,944 payments, about 0.0024 tKAS each.
- The family lane read 5,563 coins and 260,152 usable tKAS before the run, and 5,558 coins and 255,428 usable tKAS after: 4,724 tKAS, which is mostly the 16 genesis coins plus about 1 tKAS locked per landed hop (4,585 hops on the counter), and the hop fees.
- Both stay far above the abort line (2,500 coins, 18,000 usable tKAS).

## What a next attempt could try (not opened)

1. Hold payments at or just under the band the blocks took (about 1,800 tx/s) and step only the family fee, so the fee effect is read without a backlog that also starves the parents of chained hops.
2. Submit a family tier through the same public kaspads as the payments, so the node path and the fee are not tangled.
3. Read the fee-rate selection rule of the kaspad version in use before calling any result a fee effect.
4. Fix Mini's counter to key by transaction id and take removed chain blocks back out, or drop it as a second read.
5. The bot stays a `NO SEND` until a third unique kaspad answers.
