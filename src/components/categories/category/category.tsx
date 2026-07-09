import { Sounds } from '@/components/sounds';

import { fiveElements } from '@/lib/design/five-elements';

import styles from './category.module.css';

import type { Category } from '@/data/types';

interface CategoryProps extends Category {
  functional?: boolean;
}

export function Category({
  element,
  functional = true,
  icon,
  id,
  sounds,
  title,
}: CategoryProps) {
  const palette = element ? fiveElements[element] : undefined;
  const style = palette
    ? ({
        '--cat-accent': palette.accent,
        '--cat-bar': palette.bar,
        '--cat-bg': palette.bg,
        '--cat-border': palette.border,
      } as React.CSSProperties)
    : undefined;

  return (
    <div className={styles.category} id={`category-${id}`} style={style}>
      <div className={styles.iconContainer}>
        <div className={styles.tail} />
        <div aria-hidden="true" className={styles.icon}>
          {icon}
        </div>
      </div>

      <div className={styles.title}>{title}</div>

      <Sounds functional={functional} id={id} sounds={sounds} />
    </div>
  );
}
