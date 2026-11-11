MET

# HOLD-2, desk, pre-run 8

> Counts only. Submit-OK is the desk's sender log. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

Payment offer 2,027 tx/s at 150 sompi/gram, from 6 payment senders, 3 per kept public node (2 unique kaspads), each its own process and connection. Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder, on the desk's private TN10 node, which takes no payment submit.

Payment pile: 8,400 coins on the payment key at the preflight, dealt evenly over the 6 senders before the first payment (last deal, start: 8,400 coins in all, 1,400 / 1,400 / 1,400 / 1,400 / 1,400 / 1,400, even). A deal never holds more coins than the preflight pile. A coin is re-used about once a second, so one sender's ceiling is about its pool per second.

## Submit-OK and included, per minute

| Minute (UTC) | Pay submit-OK | Our payments included | Included, all non-coinbase | Counter |
|---|---:|---:|---:|---|
| 2026-11-11T23:22 | 121,360 | 124,238 | 127,367 | kept pace |
| 2026-11-11T23:23 | 121,406 | 121,299 | 124,341 | kept pace |
| 2026-11-11T23:24 | 121,257 | 121,619 | 124,586 | kept pace |

Submit-OK counts in the minute a submit was answered. Included counts in the minute of the chain block that accepted it, so a payment submitted late in one minute can be included in the next. "Kept pace" means the desk node's DAA stayed within 100 of the kept public kaspad and its sink was under 30 s old in every sample of that minute; "LAGGING" means it did not, and the count is what the node had accepted, not a network figure.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | Double hops (200) | Triple hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-11T23:22 | 127,367 | 124,238 | 5 | 28 | 53 | 3,044 | 289 | 0 | 385 | 20 | kept pace |
| 2026-11-11T23:23 | 124,341 | 121,299 | 1 | 13 | 50 | 2,979 | 279 | 3 | 651 | 20 | kept pace |
| 2026-11-11T23:24 | 124,586 | 121,619 | 1 | 9 | 36 | 2,923 | 256 | 0 | 515 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–6): 100 sompi/gram per hop. Double (families 7–11): 200 sompi/gram per hop. Triple (families 12–16): 300 sompi/gram per hop. The rate rides on each hop line to the one builder. Payments pay 150.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 30 (1,028), 31 (976), 32 (734), 29 (691), 33 (522), 34 (374), 28 (273), 35 (244), 36 (140), 27 (83), 37 (72), 38 (49), and 58 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | Double OK / att / rate rej / full rej / waiting | Triple OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-11T23:22 | 121,360 | 121,360 | 0 | 0 | 0 | 5 / 427 / 0 / 0 / 6 | 28 / 364 / 0 / 0 / 5 | 53 / 377 / 0 / 0 / 5 | 2 | 0 | yes |
| 2026-11-11T23:23 | 121,406 | 121,406 | 0 | 0 | 0 | 1 / 422 / 0 / 0 / 6 | 13 / 358 / 0 / 0 / 5 | 50 / 374 / 0 / 0 / 5 | 4 | 0 | yes |
| 2026-11-11T23:24 | 121,257 | 121,257 | 0 | 0 | 0 | 1 / 425 / 0 / 0 / 6 | 9 / 359 / 0 / 0 / 5 | 36 / 364 / 0 / 0 / 5 | 3 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 8 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 109,458 to 133,782 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender is on the desk's private node, not on a kept public node. Every cohort shares that node, and the desk counter reads it.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621032626 | 182,059 | 0 | 0 | 34 |
| 5 | yes | 621032626 | 181,964 | 0 | 0 | 39 |

## Payment senders

| Sender | Node | Pay submit-OK | Rejects | Minutes with a row |
|---|---:|---:|---:|---:|
| 1.1 | 1 | 60,645 | 0 | 3 of 3 |
| 1.2 | 1 | 60,679 | 0 | 3 of 3 |
| 1.3 | 1 | 60,735 | 0 | 3 of 3 |
| 5.1 | 5 | 60,668 | 0 | 3 of 3 |
| 5.2 | 5 | 60,738 | 0 | 3 of 3 |
| 5.3 | 5 | 60,558 | 0 | 3 of 3 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 3 of 7 | 42802 | 146085 |
| double | 50 of 50 | 10556 | 73784 |
| triple | 139 of 139 | 4529 | 18806 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end.
