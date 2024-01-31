export interface todo {
    id: number;
    name: string;
    status: Status;
}

export type Status = 'completed' | 'uncompleted';