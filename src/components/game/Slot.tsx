import type { NextPage } from 'next';

import style from './Slot.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';

const Slot: NextPage = props => {
    const scrollRef = useRef(null);
    const [scrollElement, setScrollElement] = useState(null);
    const [scrollMaxHeight, setScrollMaxHeight] = useState(-1);
    const [scrollTop, setScrollTop] = useState<number>(-1);
    const [scrollInterval, setScrollInterval] = useState(-1);
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

        const second = 1000;
        const minimumSecond = 3 * second;
        const maximumSecond = 5 * second;
        const slotEndTimer = (minimumSecond + Math.floor(Math.random() * maximumSecond)) % maximumSecond;
        const timeInterval = 10;
        const initialScrollInterval = timeInterval / slotEndTimer * scrollElement.scrollTop;

        setScrollElement(scrollElement);
        setScrollTop(scrollElement.scrollTop);
        setScrollMaxHeight(scrollElement.scrollTop);
        setScrollInterval(initialScrollInterval);
    }, [scrollRef]);

    useEffect(() => {
        if (!scrollElement) return;
        if (scrollTop === -1) return;
        if (scrollInterval === -1) return;

        const timeInterval = 10;

        const intervalScrollTop = scrollTop - scrollInterval;
        const newScrollTop = intervalScrollTop < 0 ? 0 : intervalScrollTop;

        scrollElement.scrollTo(0, newScrollTop);

        const timeoutId = setTimeout(() => setScrollTop(newScrollTop), timeInterval);

        return () => clearTimeout(timeoutId);
    }, [scrollTop]);

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
