import React from 'react';
import styles from './FantasyTips.module.css';

const FantasyTips = () => {
  return (
    <div className={styles.fantasyTipsWrapper}>
      <div className={styles.tipHeaderImage}>
        <h1 className={styles.fantasyTitle}>Fantasy Tips</h1>
      </div>

      <div className={styles.tipContent}>
        <h2 className={styles.kick}>Main Card Focus</h2>
        <p className={styles.description}>
          On Fantasy Mmadness, main card fights often yield the highest returns—more minutes, more striking exchanges, and better fantasy ceilings. Prioritize high-volume fighters who go the distance, as sustained action builds consistent points. Look at matchups expected to stay standing for maximum output.
        </p>

        <h2 className={styles.date}>Sleeper Picks</h2>
        <p className={styles.description}>
          Don’t just chase stars—underrated fighters can win you contests. Look for underdogs with cardio, pressure, and resilience. These fighters often fly under the radar but can rack up takedowns, reversals, or land over 100 strikes in gritty decision wins. On Fantasy Mmadness, volume is king, not just finishes.
        </p>

        <p className={styles.date}>INSIDER STRATEGY – MAY 6, 2025</p>
        <p className={styles.description}>
          Use your captain slot wisely. On Fantasy Mmadness, your captain earns 1.5x points—so aim for fighters who start fast and finish fights. Look at striking accuracy, first-round win history, and betting props favoring early finishes. An explosive captain gives you a huge edge on the leaderboard.
        </p>

        <h2 className={styles.date}>Avoid Heavy Grapplers (Sometimes)</h2>
        <p className={styles.description}>
          Grappling can score well if it’s active—takedowns, advances, ground-and-pound. But control time without volume is risky. If a wrestler tends to stall or ride out rounds, it can cap your score. Matchup context matters—pick grapplers only when their opponent has poor takedown defense or is prone to fatigue.
        </p>

        <h2 className={styles.date}>Late News = Late Edge</h2>
        <p className={styles.description}>
          Always check the latest fight news before lock. On Fantasy Mmadness, a last-minute cancellation means zero points—no subs, no swaps. Watch for missed weights, injuries, or illness updates. Following Fantasy Mmadness alerts and official UFC news sources can protect your lineup from dead slots.
        </p>

        <h2 className={styles.date}>Final Tip</h2>
        <p className={styles.description}>
          Use Fantasy Mmadness scoring trends to your advantage. Strikers who average 80+ significant strikes per fight are fantasy gold—even in losses. Study fighter logs, pay attention to pace metrics, and track scoring changes across events. The smartest players build balanced lineups with both upside and stability.
        </p>
      </div>
    </div>
  );
};

export default FantasyTips;
