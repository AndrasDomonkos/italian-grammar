import type { Lesson } from '../types';
import { articoliDeterminativi } from './articoli-determinativi';
import { articoliIndeterminativi } from './articoli-indeterminativi';
import { essere } from './essere';
import { avere } from './avere';
import { sostantiviSingolarePlurale } from './sostantivi-singolare-plurale';
import { aggettiviConcordanza } from './aggettivi-concordanza';
import { presenteAre } from './presente-are';
import { presenteEre } from './presente-ere';
import { presenteIre } from './presente-ire';
import { verbiIrregolariComuni } from './verbi-irregolari-comuni';
import { possessivi } from './possessivi';
import { dimostrativi } from './dimostrativi';
import { preposizioniSemplici } from './preposizioni-semplici';
import { ceCiSono } from './ce-ci-sono';
import { piaceBase } from './piacere-base';
import { verbiRiflessivi } from './verbi-riflessivi';
import { numeriOraData } from './numeri-ora-data';
import { passatoProssimoIntro } from './passato-prossimo-intro';

export const a1Lessons: Lesson[] = [
  articoliDeterminativi,
  articoliIndeterminativi,
  essere,
  avere,
  sostantiviSingolarePlurale,
  aggettiviConcordanza,
  presenteAre,
  presenteEre,
  presenteIre,
  verbiIrregolariComuni,
  possessivi,
  dimostrativi,
  preposizioniSemplici,
  ceCiSono,
  piaceBase,
  verbiRiflessivi,
  numeriOraData,
  passatoProssimoIntro,
];
