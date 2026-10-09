/* As três frentes da home. Número, cor e glifo seguem a mesma lógica
   das seções: a cor de cada frente aparece onde ela aparece (home,
   filtro do CV, etiqueta de cada cargo). */
import type { Frente, Lang } from '../i18n/ui';
import type { Glyph } from './sections';

export const frentes: Record<Frente, { color: string; glyph: Glyph; nome: Record<Lang, string> }> = {
  prod: { color: 'var(--cyan)', glyph: 'triangle', nome: { pt: 'Produto', en: 'Product' } },
  cont: { color: 'var(--ylw)', glyph: 'square', nome: { pt: 'Conteúdo', en: 'Content' } },
  pesq: { color: 'var(--acid)', glyph: 'diamond', nome: { pt: 'Pesquisa', en: 'Research' } },
};

export const frenteOrder: Frente[] = ['prod', 'cont', 'pesq'];
