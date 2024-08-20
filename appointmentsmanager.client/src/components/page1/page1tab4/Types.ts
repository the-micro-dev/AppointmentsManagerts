// types.ts

export interface RowData {
    id: number;
    name: string;
    age: number;
    job: string;
    city: string;
    country: string;
}

export interface SortConfig {
    key: keyof RowData;
    direction: 'asc' | 'desc';
}

export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    data: RowData[];
    setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}
