// src/lib/types.ts
export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

export type Filter = 'semua' | 'aktif' | 'selesai';
