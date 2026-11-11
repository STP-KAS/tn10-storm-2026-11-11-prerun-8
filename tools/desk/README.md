> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only. No key, id, address, host, or port in these files.

# Desk runner, pre-run 8

Pre-run 7's runner, with two changes (lock lines (iv) and (v) in [locks/LOCKED.md](../../locks/LOCKED.md)).

- `counter.mjs` (new): read-only inclusion counter on the desk's private TN10 node. It reads the node's accepted chain (`getVirtualChainFromBlock` with accepted transaction ids), puts each accepted id in the minute of its accepting chain block's header time, and sorts it into our payments, our families by fee tier, coinbase (one per merged blue block), and other traffic. A removed chain block takes its counts back out. Every 10 s it samples the desk node's DAA against a kept public kaspad and the desk sink's age. Minutes are `final` 15 s after a later chain block is read, and marked `LAGGING` (DAA gap over 100, sink older than 30 s, or 20 s without a read) or `partial`. Nothing is filled in. Writes `logs/chain-minute.log` and `logs/chain-lag.log` in the private run folder.
- `pay2.mjs`: pre-run 7's sender, plus one line: after each batch, the 13-hex prefix of every submit-OK id goes to a private file in the run folder, so the counter can tell our payments from other traffic. Never in git.
- `desk-runner.mjs`: starts the counter before the broker and the genesis (`HELD counter-down` if it does not log its start in 60 s), leaves it running through `stopAll`, restarts it once if it exits, waits up to 3 minutes for the counter before each step file, renders submit-OK next to included per minute with the counter's marks, checks the three fee tiers on the family sender's `FEE_SPLIT` line and on the submit rows, reads a 5-minute tail after RETURN, and publishes `counts/chain/TIMELINE.md` before `logs/METHOD.md`.
- `preflight.mjs`, `paypool.mjs`: pre-run 7's, unchanged.

Everything pre-run 7's runner did stays: one runner, detached children, unique kaspads, three senders per kaspad, the fair deal and the handoff repair, git retries with a local FAILED file, never restarted mid-run.
