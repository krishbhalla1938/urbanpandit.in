import type { Course } from '../types';
import { bmc } from './bmc';
import { nism } from './nism';
import { fmva } from './fmva';
import { cfa } from './cfa';
import { ncfm } from './ncfm';
import { accounting } from './accounting';

// Ordered exactly as requested by the learner.
export const courses: Course[] = [bmc, nism, fmva, cfa, ncfm, accounting];
