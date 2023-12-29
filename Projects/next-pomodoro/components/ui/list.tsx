'use client';

import { GripVertical, Plus } from 'lucide-react';
import { type ReactElement, useState } from 'react';
interface ListProps {
    Component: ReactElement;
    fill?: Number
}
export default function List<T>({
    Component,
    fill = 0
}: ListProps) {
    const initialState =
    Array.from({ length: (fill as number) }, (_, index) => (Component));
    const [items, setItems] = useState<ReactElement[]>(initialState);
    const addItem = () => {
        setItems((prev) => [...prev, Component]);
    };

    if (items.length === 0)
        return (
            <div
                className="
                w-96
                h-10
                hover:bg-gray-100
                rounded-md
                text-gray-400
                transition
                cursor-pointer
                flex
                items-baseline"
                onClick={addItem}
            >
                <div className="flex my-auto">
                    <Plus /> NEW
                </div>
            </div>
        );
    return (
        <>
            {items.map((item, i) => {
                const Component = item;
                return (
                    <div key={i} className="flex group items-center">
                        <div className="group-hover:opacity-100 flex text-gray-400 opacity-0 transition">
                            <Plus
                                onClick={addItem}
                                size={20}
                                className="cursor-pointer p-0.5 rounded-[2px] hover:bg-gray-100"
                            />
                            <GripVertical
                                size={20}
                                className="cursor-grab active:cursor-grabbing p-0.5 rounded-[2px] hover:bg-gray-100"
                            />
                        </div>
                        {item}
                    </div>
                );
            })}
        </>
    );
}
