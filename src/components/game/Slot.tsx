import type { NextPage } from 'next';

import style from './Slot.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';

const Slot: NextPage = () => {
    const scrollRef = useRef(null);
    const [scrollElement, setScrollElement] = useState(null);
    const [scrollTop, setScrollTop] = useState<number>(-1);

    const slot = useMemo(() => {
        const minRotation: number = 5;
        const maxRotation: number = 10;
        const rotation: number = Math.floor(Math.random() * maxRotation + minRotation);
        const rotator = new Array(rotation).fill(true);
        const slotItems = [
            {
                name: "시공 좋아",
            },
            {
                name: "Yee"
            },
            {
                name: "Pop cat"
            },
            {
                name: "이차는 제껍니다"
            }
        ];

        const slotItem = slotItems.map(slotItem => {
            const name = slotItem.name;
            return (
                <div
                    key={name}
                    className={style.slotItem}
                >
                    {name}
                </div>
            )
        });

        return rotator.map((_, index) => {
            return (
                <div
                    className={style.slotItems}
                    key={index}
                >
                    {slotItem}
                </div>
            );
        });
    }, []);

    useEffect(() => {
        if (!scrollRef) return;

        const scrollElement = scrollRef?.current;
        const scrollHeight = scrollElement.scrollHeight;

        scrollElement.scrollTo(0, scrollHeight);

        setScrollElement(scrollElement);
        setScrollTop(scrollHeight);
    }, [scrollRef]);

    // useEffect(() => {
    //     if (!scrollElement) return;
    //     if (scrollTop === -1) return;

    //     const interval = 1000;
    //     scrollElement.scrollTo(0, scrollTop - 100);

    //     // setTimeout(() => setScrollTop(scrollTop - 5), interval);
    // }, [scrollTop]);

    return (
        <div
            ref={scrollRef}
            className={style.slotItemsContainer}
        >
            {slot}
        </div>
    );
}

export default Slot;
