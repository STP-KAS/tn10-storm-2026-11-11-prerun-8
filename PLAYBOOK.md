> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is the playbook for pre-run 8.** It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, 6, or 7. It does not start a machine and it does not arm one.

# Playbook

Who does what, and the gates before each machine may start. The plan is [plan/PLAN.md](plan/PLAN.md), the locks are [locks/LOCKED.md](locks/LOCKED.md), and the go files are the three GO pages. This page does not override them.

## Oversight

TN10 ops oversees this rehearsal end to end: Mini, the desk (Build), and the bot. TN10 only. Never mainnet. Do not edit the Tuesday repo, the Wednesday repo, or pre-run 1's to 7's go files. Do not write `REVIEW_CLOSED`.

For pre-run 8 the operator does not paste. On 2026-11-11 he said to start everything, to keep experimenting and spend what the run needs from the TN10 wallets, to continue until the goals are met, and (at 22:20Z) that the desk's own node does the counting. That is the arm. The agents start their runners once the gates are facts.

## Start gates

1. **Mini node synced.** Existing TN10 kaspad, existing data, no wipe. `isSynced` true, DAA moving.
2. **Desk node synced.** Existing private TN10 kaspad, existing data, loopback only, started with `pwsh`. No wipe. Synced, DAA moving.
3. **No other runner.** No earlier runner, waiter, or counter on any machine. Lane above the abort line.
4. **Hashes.** `hashes/SIXTEEN.md` with sixteen rows and an On origin line, from [tools/sixteen](tools/sixteen/README.md).
5. **Open.** The desk pushes `logs/PRE-RUN-OPEN.md`. Mini then pushes `logs/MINI-ARMED.md`.
6. **Counter, families, senders.** The desk runner starts the counter on its private node and waits for its start line (`HELD counter-down` otherwise). Then the genesis from the bundle that wrote `hashes/SIXTEEN.md`, the families, and the payment steps.

## Who does what

| Who | Role | What not to do |
|---|---|---|
| **Desk (Build)** | Sends the sixteen families (three fee tiers) and the payment offers. Its private TN10 node counts what the chain accepted (lock line (iv)). Publishes `hashes/SIXTEEN.md`, `logs/PRE-RUN-OPEN.md`, `counts/desk/` per step, `counts/chain/TIMELINE.md` after the tail, and `logs/METHOD.md`. | Do not stop or wipe the desk node. No Windows PowerShell 5.1, no `KaspaPublicNode`, no devnet. No 8- or 32-family publisher. No second runner. Never restart the runner mid-run. |
| **Mini** | Second chain read on its own node. Does not send, mine, or hold a key. Publishes `logs/MINI-ARMED.md`, then `counts/mini/` when the matching desk file is on origin. Each head is Mini's own read: `READ`, `PARTIAL`, or `NOT READ`. | Do not wipe. Do not repeat the desk's head as Mini's. |
| **Bot (TN10 ops)** | Sends payments in the HOLD-4 minute only, on a synced public kaspad that is not one the desk kept, or publishes a legal `NO SEND`. | Do not send on HOLD-1, HOLD-2, HOLD-3, or RETURN. One waiter. No local node. |

## Status when this repo was opened

Not a gate. A status line, so nobody guesses.

- Mini: existing TN10 kaspad; its sync is read and logged by its runner before `MINI-ARMED`.
- Desk: existing private TN10 kaspad 2.1.0 up since 2026-11-11T07:44:58Z with `pwsh`, no wipe, synced. It is not stopped for this pre-run. No pre-run 7 runner or child is running.
- Box: no local TN10 node. No bot waiter running.
- Nodes: at 2026-11-11T22:24Z the bot's check found every answering public endpoint to be one of the same two public kaspads the desk keeps. So the bot is expected to write `NO SEND no-free-node`.
- Lane and pile: lane well above the abort line; the payment key still holds pre-run 7's 8,400 coins. One key needs a fresh genesis coin from the lane before the hash build.
- Counter, read-only check against the live desk node before any send (2026-11-11T22:34Z–22:36Z, background traffic only): about 320 chain blocks a minute, DAA gap 0–12 against a kept public kaspad, sink age under 0.8 s, each minute final about 20 s after its end.
- Known risks, not fixed mid-run:
  - The desk node serves the families and the counter. Under HOLD-3 and HOLD-4 it may fall behind; the counter marks that per minute, and a family-node DAA that stops moving is dirt for the sender, as before.
  - Submit-OK can run ahead of inclusion. The counter shows how far.
  - A payment and its change are chained, so a payment chain moves at most one step per inclusion. Under a backlog this caps our own inclusion as well as the blocks do.
  - The fee tiers ride on families that are chained too. A hop waits for its parent, so one hop stuck in the mempool holds the family still whatever its fee.

## Offline rehearsals, recorded before `PRE-RUN-OPEN`

Rehearsal A, 2026-11-11 22:36Z to 23:00Z (desk, Brussels 23:36 to 00:00). The real desk runner, counter, payment sender, family sender and builder ran against a stand-in node on the desk. The stand-in answered with the submit latency of pre-run 7's rehearsal, accepted at most 2,300 transactions a second on chain (so HOLD-3 and HOLD-4 were over block space and HOLD-1 and HOLD-2 under it), carried about 40 tx/s of other traffic, let the desk view fall to quarter speed for 100 s inside HOLD-2, and replaced one chain block once. Nothing was sent to the network. Short times: 90 s tail, 120 s counter wait.

- Preflight kept two unique kaspads (one candidate was the same kaspad as another). The counter logged its start before the genesis. The family sender's `FEE_SPLIT` line named 100/200/300 and the runner checked it. 16 families attempting.
- HOLD-1 `MET` (60,933 / 60,811 / 60,762 submit-OK; included 60,941 / 60,643 / 61,001). HOLD-2 `MET` (about 121,000 a minute submit-OK and included). HOLD-3 `MET` on submit-OK (about 182,000 a minute) while the counter read about 126,000 of our payments included a minute: the cap. HOLD-4 one minute, 241,403 submit-OK, 125,580 included. RETURN `MET` on submit-OK (about 60,500) while the backlog drained at the cap (about 126,000 included a minute).
- The lag window: three HOLD-2 minutes were marked `LAGGING` (DAA gap up to 745, sink age up to 75 s; one minute final 79 s late), and the step file said so next to its numbers. Every other minute kept pace (gap at most 2, sink under 0.2 s, final about 20 s after the minute).
- Families under the cap: floor hops fell first (about 200 to 340 included a minute against about 370 under the cap), double and triple held about 300 each. That is the stand-in's rule, not a network result; it shows the per-tier columns work.
- After RETURN the counter read the tail and the runner published `counts/chain/TIMELINE.md` and `logs/METHOD.md`, then exited 0. Whole run as read: 2,775,918 payment submit-OK, 2,582,788 included by the end of the tail.
- What the rehearsal did not exercise: the stand-in's one chain-block replacement happened before the counter had counted that block. Reading the code after the run showed a replaced block still waiting in the counter's 4-second queue would have been counted. Fixed before this repo (a replaced block is also taken out of the queue) and checked on the box against a small mock that replaces the tip block; a full rehearsal was not run again.

## When something breaks

Append a worked fix to [locks/LOCKED.md](locks/LOCKED.md) in the form that page shows, and a repair line to `logs/FIXES.md`. If the run dies before RETURN, write `logs/FAILED.md`, stop every runner, waiter, and counter, and do not resume. The next attempt is a new repo that starts from this repo's lock file.
