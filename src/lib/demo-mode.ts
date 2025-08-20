// Demo 模式支持 - 用于 Bolt.new 演示
import { CardWithMetadata, Deck } from '@/lib/types';
import { createEmptyCard, State } from 'ts-fsrs';

// 演示数据
export const demoCards: CardWithMetadata[] = [
  {
    ...createEmptyCard(),
    id: 'demo-1',
    front: '什么是 Spaced Repetition？',
    back: 'Spaced Repetition（间隔重复）是一种学习技术，通过在逐渐增长的时间间隔内重复学习材料来提高长期记忆。',
    state: State.New,
    deleted: false,
    bookmarked: false,
    cardLastModified: Date.now(),
    cardContentLastModified: Date.now(),
    cardDeletedLastModified: 0,
    cardBookmarkedLastModified: 0,
    cardSuspendedLastModified: 0,
    createdAt: Date.now() - 86400000, // 1 day ago
  },
  {
    ...createEmptyCard(),
    id: 'demo-2',
    front: 'FSRS 算法的全称是什么？',
    back: 'Free Spaced Repetition Scheduler - 自由间隔重复调度器',
    state: State.Learning,
    deleted: false,
    bookmarked: true,
    cardLastModified: Date.now(),
    cardContentLastModified: Date.now(),
    cardDeletedLastModified: 0,
    cardBookmarkedLastModified: Date.now(),
    cardSuspendedLastModified: 0,
    createdAt: Date.now() - 172800000, // 2 days ago
  },
  {
    ...createEmptyCard(),
    id: 'demo-3',
    front: '这个应用支持哪些功能？',
    back: `
- 📱 PWA 支持，可离线使用
- ⚡ 快速响应的本地优先架构  
- 🔄 多设备数据同步
- 📊 详细的学习统计
- 💻 现代化的用户界面
    `,
    state: State.Review,
    deleted: false,
    bookmarked: false,
    cardLastModified: Date.now(),
    cardContentLastModified: Date.now(),
    cardDeletedLastModified: 0,
    cardBookmarkedLastModified: 0,
    cardSuspendedLastModified: 0,
    createdAt: Date.now() - 259200000, // 3 days ago
  }
];

export const demoDecks: Deck[] = [
  {
    id: 'demo-deck-1',
    name: 'Spaced 应用介绍',
    description: '了解这个间隔重复学习应用的基本功能',
    deleted: false,
    lastModified: Date.now(),
  },
  {
    id: 'demo-deck-2', 
    name: '学习方法',
    description: '关于间隔重复和记忆技巧的知识',
    deleted: false,
    lastModified: Date.now() - 86400000,
  }
];

// 演示模式初始化
export function initDemoMode() {
  if (!import.meta.env.VITE_DEMO_MODE) return;
  
  console.log('Initializing demo mode...');
  
  // 可以在这里初始化演示数据到 IndexedDB
  // 或者直接在内存数据库中设置
}

// 检查是否为演示模式
export function isDemoMode(): boolean {
  return import.meta.env.VITE_DEMO_MODE === 'true';
}