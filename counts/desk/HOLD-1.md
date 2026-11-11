MET

# HOLD-1, desk, pre-run 8

> Counts only. Submit-OK is the desk's sender log. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

Payment offer 1,013 tx/s at 150 sompi/gram, from 6 payment senders, 3 per kept public node (2 unique kaspads), each its own process and connection. Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder, on the desk's private TN10 node, which takes no payment submit.

Payment pile: 8,400 coins on the payment key at the preflight, dealt evenly over the 6 senders before the first payment (last deal, start: 8,400 coins in all, 1,400 / 1,400 / 1,400 / 1,400 / 1,400 / 1,400, even). A deal never holds more coins than the preflight pile. A coin is re-used about once a second, so one sender's ceiling is about its pool per second.

## Submit-OK and included, per minute

| Minute (UTC) | Pay submit-OK | Our payments included | Included, all non-coinbase | Counter |
|---|---:|---:|---:|---|
| 2026-11-11T23:18 | 61,308 | 60,076 | 63,644 | kept pace |
| 2026-11-11T23:19 | 60,700 | 60,705 | 64,334 | kept pace |
| 2026-11-11T23:20 | 60,741 | 61,016 | 64,712 | kept pace |

Submit-OK counts in the minute a submit was answered. Included counts in the minute of the chain block that accepted it, so a payment submitted late in one minute can be included in the next. "Kept pace" means the desk node's DAA stayed within 100 of the kept public kaspad and its sink was under 30 s old in every sample of that minute; "LAGGING" means it did not, and the count is what the node had accepted, not a network figure.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | Double hops (200) | Triple hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-11T23:18 | 63,644 | 60,076 | 182 | 171 | 179 | 3,087 | 304 | 1 | 578 | 20 | kept pace |
| 2026-11-11T23:19 | 64,334 | 60,705 | 183 | 167 | 184 | 3,135 | 323 | 2 | 494 | 20 | kept pace |
| 2026-11-11T23:20 | 64,712 | 61,016 | 162 | 155 | 178 | 3,238 | 288 | 1 | 557 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–6): 100 sompi/gram per hop. Double (families 7–11): 200 sompi/gram per hop. Triple (families 12–16): 300 sompi/gram per hop. The rate rides on each hop line to the one builder. Payments pay 150.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 30 (1,035), 31 (982), 32 (749), 29 (676), 33 (532), 34 (376), 35 (259), 28 (249), 36 (143), 37 (71), 27 (68), 38 (51), and 58 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | Double OK / att / rate rej / full rej / waiting | Triple OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-11T23:18 | 61,308 | 61,308 | 0 | 0 | 0 | 185 / 508 / 0 / 0 / 6 | 171 / 432 / 0 / 0 / 5 | 180 / 436 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-11T23:19 | 60,700 | 60,700 | 0 | 0 | 0 | 183 / 506 / 0 / 0 / 6 | 167 / 423 / 0 / 0 / 5 | 184 / 433 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-11T23:20 | 60,741 | 60,741 | 0 | 0 | 0 | 162 / 492 / 0 / 0 / 6 | 155 / 415 / 0 / 0 / 5 | 178 / 433 / 0 / 0 / 5 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 8 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 54,702 to 66,858 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender is on the desk's private node, not on a kept public node. Every cohort shares that node, and the desk counter reads it.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621030535 | 91,381 | 0 | 0 | 32 |
| 5 | yes | 621030535 | 91,368 | 0 | 0 | 38 |

## Payment senders

| Sender | Node | Pay submit-OK | Rejects | Minutes with a row |
|---|---:|---:|---:|---:|
| 1.1 | 1 | 30,397 | 0 | 3 of 3 |
| 1.2 | 1 | 30,421 | 0 | 3 of 3 |
| 1.3 | 1 | 30,563 | 0 | 3 of 3 |
| 5.1 | 5 | 30,584 | 0 | 3 of 3 |
| 5.2 | 5 | 30,553 | 0 | 3 of 3 |
| 5.3 | 5 | 30,231 | 0 | 3 of 3 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 530 of 530 | 1722 | 3102 |
| double | 493 of 493 | 1568 | 2617 |
| triple | 542 of 542 | 1420 | 2469 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end.
