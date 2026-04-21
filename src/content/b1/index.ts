import type { Lesson } from '../types';
import { congiuntivoPresente } from './congiuntivo-presente';
import { congiuntivoPassato } from './congiuntivo-passato';
import { congiuntivoOpinione } from './congiuntivo-opinione';
import { congiuntivoImperfetto } from './congiuntivo-imperfetto';
import { congiuntivoTrapassato } from './congiuntivo-trapassato';
import { periodoIpotetico } from './periodo-ipotetico';
import { pronomiCombinati } from './pronomi-combinati';
import { pronomiRelativi } from './pronomi-relativi';
import { discorsoIndiretto } from './discorso-indiretto';
import { formaPassiva } from './forma-passiva';
import { concordanzaTempi } from './concordanza-tempi';
import { fareLasciareCausativo } from './fare-lasciare-causativo';
import { participioAggettivo } from './participio-come-aggettivo';
import { gerundioInfinito } from './gerundio-e-infinito';
import { connettivisCoesione } from './connettivi-coesione';

export const b1Lessons: Lesson[] = [
  congiuntivoPresente,
  congiuntivoPassato,
  congiuntivoOpinione,
  congiuntivoImperfetto,
  congiuntivoTrapassato,
  periodoIpotetico,
  pronomiCombinati,
  pronomiRelativi,
  discorsoIndiretto,
  formaPassiva,
  concordanzaTempi,
  fareLasciareCausativo,
  participioAggettivo,
  gerundioInfinito,
  connettivisCoesione,
];
