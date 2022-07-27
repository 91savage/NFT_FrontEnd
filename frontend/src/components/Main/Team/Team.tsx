import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { childrenVariants, staggerVariants } from '../../../lib/animation/variants/revealVariant';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import * as s from './Team.style';

interface ICard {
    text: string;
}
const Card = ({ text }: ICard) => {
    return <s.Card variants={childrenVariants}>{text}</s.Card>;
};

const Team = () => {
    const teamRef = useRef<HTMLElement>(null);
    const isInView = useInView(teamRef, {
        once: false,
        amount: 0.8,
    });
    useViewportNavState(isInView, 'team');

    return (
        <s.Section id="team" ref={teamRef} data-scroll-section>
            <s.Title>Team</s.Title>
            <s.Container //
                variants={staggerVariants}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
            >
                <Card text="Team1" />
                <Card text="Team2" />
                <Card text="Team3" />
            </s.Container>
        </s.Section>
    );
};

export default Team;
