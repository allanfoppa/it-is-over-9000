const BASE_URL = "https://dragonball-api.com/api";

export const CharacterService = {
  async getAll(page = 1, limit = 10) {
    const response = await fetch(`${BASE_URL}/characters?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch characters');
    return response.json();
  },

  async filterByRace(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${BASE_URL}/characters?${query}`);
    if (!response.ok) throw new Error('Failed to filter characters');
    return response.json();
  },

  async getById(id: string) {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) throw new Error('Failed to fetch character details');
    return response.json();
  }
};
