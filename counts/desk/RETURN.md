MET

# RETURN, desk, pre-run 8

> Counts only. Submit-OK is the desk's sender log. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

Payment offer 1,013 tx/s at 150 sompi/gram, from 6 payment senders, 3 per kept public node (2 unique kaspads), each its own process and connection. Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder, on the desk's private TN10 node, which takes no payment submit.

Payment pile: 8,400 coins on the payment key at the preflight, dealt evenly over the 6 senders before the first payment (last deal, start: 8,400 coins in all, 1,400 / 1,400 / 1,400 / 1,400 / 1,400 / 1,400, even). A deal never holds more coins than the preflight pile. A coin is re-used about once a second, so one sender's ceiling is about its pool per second.

## Submit-OK and included, per minute

| Minute (UTC) | Pay submit-OK | Our payments included | Included, all non-coinbase | Counter |
|---|---:|---:|---:|---|
| 2026-11-11T23:35 | 60,994 | 121,778 | 121,786 | kept pace |
| 2026-11-11T23:36 | 60,804 | 120,141 | 120,160 | kept pace |
| 2026-11-11T23:37 | 60,812 | 119,936 | 119,970 | kept pace |

Submit-OK counts in the minute a submit was answered. Included counts in the minute of the chain block that accepted it, so a payment submitted late in one minute can be included in the next. "Kept pace" means the desk node's DAA stayed within 100 of the kept public kaspad and its sink was under 30 s old in every sample of that minute; "LAGGING" means it did not, and the count is what the node had accepted, not a network figure.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | Double hops (200) | Triple hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-11T23:35 | 121,786 | 121,778 | 0 | 76 | 118 | 17 | 294 | 1 | 620 | 21 | kept pace |
| 2026-11-11T23:36 | 120,160 | 120,141 | 0 | 112 | 125 | 21 | 285 | 1 | 450 | 20 | kept pace |
| 2026-11-11T23:37 | 119,970 | 119,936 | 0 | 119 | 122 | 7 | 292 | 1 | 655 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–6): 100 sompi/gram per hop. Double (families 7–11): 200 sompi/gram per hop. Triple (families 12–16): 300 sompi/gram per hop. The rate rides on each hop line to the one builder. Payments pay 150.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 30 (975), 31 (894), 29 (764), 32 (680), 33 (487), 28 (433), 34 (321), 35 (211), 27 (155), 36 (125), 37 (58), 26 (41), and 59 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | Double OK / att / rate rej / full rej / waiting | Triple OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-11T23:35 | 60,994 | 60,994 | 0 | 0 | 0 | 0 / 420 / 0 / 0 / 6 | 76 / 397 / 0 / 0 / 5 | 118 / 418 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-11T23:36 | 60,804 | 60,804 | 0 | 0 | 0 | 0 / 426 / 0 / 0 / 6 | 112 / 393 / 0 / 0 / 5 | 125 / 395 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-11T23:37 | 60,812 | 60,812 | 0 | 0 | 0 | 0 / 420 / 0 / 0 / 6 | 116 / 391 / 0 / 0 / 5 | 117 / 394 / 0 / 0 / 5 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 8 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 54,702 to 66,858 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender is on the desk's private node, not on a kept public node. Every cohort shares that node, and the desk counter reads it.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621039514 | 91,222 | 0 | 0 | 31 |
| 5 | yes | 621039514 | 91,388 | 0 | 0 | 38 |

## Payment senders

| Sender | Node | Pay submit-OK | Rejects | Minutes with a row |
|---|---:|---:|---:|---:|
| 1.1 | 1 | 30,353 | 0 | 3 of 3 |
| 1.2 | 1 | 30,520 | 0 | 3 of 3 |
| 1.3 | 1 | 30,349 | 0 | 3 of 3 |
| 5.1 | 5 | 30,531 | 0 | 3 of 3 |
| 5.2 | 5 | 30,516 | 0 | 3 of 3 |
| 5.3 | 5 | 30,341 | 0 | 3 of 3 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 0 of 0 | - | - |
| double | 304 of 304 | 2104 | 3544 |
| triple | 360 of 360 | 2095 | 3216 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end.
