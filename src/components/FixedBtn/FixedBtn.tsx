import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { scrollHeightAtom } from '../../lib/recoil/atoms';
import * as s from './FixedBtn.style';
import Goxo from './Goxo/Goxo';

import ScrollToUp from './ScrollToUp/ScrollToUp';

const FixedBtn = () => {
    const scrollHeight = useRecoilValue(scrollHeightAtom);
    const REVEAL_HEIGHT_PERCENT = 5;
    return (
        <s.Section>
            <s.Container //
                data-scroll
                data-scroll-sticky
                data-scroll-target=".Main"
            >
                <Goxo scrollHeight={scrollHeight} percent={REVEAL_HEIGHT_PERCENT} />

                <AnimatePresence>
                    {Math.ceil(scrollHeight.progressY * 100) > REVEAL_HEIGHT_PERCENT && (
                        <ScrollToUp scrollHeight={scrollHeight} />
                    )}
                </AnimatePresence>
            </s.Container>
        </s.Section>
    );
};

export default FixedBtn;
