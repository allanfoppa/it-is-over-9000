import type { Character } from './character';
import type { Meta, Links } from './api';

export interface CharactersResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}
