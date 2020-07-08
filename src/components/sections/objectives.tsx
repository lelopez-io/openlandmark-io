import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const stats = [
    {
        icon: `fa-shopping-bag `,
        style: `style1`,
        slug_top: `95% of shopping`,
        slug_bot: `all shopping online by 2040`,
        quote: `By the year 2040, as much as 95% of shopping will be facilitated by eCommerce`,
        source: `(Nasdaq, 2017)`,
        source_link: ``,
    },
    {
        icon: `fa-line-chart `,
        style: `style2`,
        slug_top: `3X growth`,
        slug_bot: `faster growth online`,
        quote: `The online shopping business in the USA is growing 3X faster than offline segment. `,
        source: `(Entrepreneur, 2017)`,
        source_link: ``,
    },
    {
        icon: `fa-cart-plus `,
        style: `style3`,
        slug_top: `$4.9 trillion`,
        slug_bot: `trillion in retail ecommerce`,
        quote: `By the year 2021, worldwide retail ecommerce sales will reach $4.9 trillion.`,
        source: `(Shopify Plus, 2019)`,
        source_link: ``,
    },
    // {
    //     icon: `fa-building `,
    //     style: `style4`,
    //     slug_top: `$6.6`,
    //     slug_bot: `trillion in B2B ecommerce`,
    //     quote: `Global B2B ecommerce sales are predicted to reach over $6.6 trillion by 2020, surpassing B2C valued at $3.2 trillion by 2020. `,
    //     source: `(Frost and Sullivan, 2017)`,
    //     source_link: ``,
    // },
    {
        icon: `fa-users`,
        style: `style5`,
        slug_top: `61% of people`,
        slug_bot: `people prefer better mobile sites`,
        quote: `As much as 61% of people have a better opinion of brands that offer a good mobile experience.`,
        source: `(Status Labs, 2018)`,
        source_link: ``,
    },
];

const Objectives = () => {
    const objectivesStats = stats.map(function (stat, index) {
        return (
            <ObjectiveItem
                key={stat.slug_bot}
                className={[stat.style, `statistic`].join(` `)}
            >
                <ObjectiveIcon
                    className={[`fa`, stat.icon].join(` `)}
                ></ObjectiveIcon>
                <ObjectiveTitle className="title is-5">
                    {stat.slug_top}
                </ObjectiveTitle>
                <ObjectiveText>
                    {/* <sup>[{index + 1}]</sup>&nbsp; */}
                    {stat.quote}&nbsp;
                    <em className="cited-source">{stat.source}</em>
                </ObjectiveText>
            </ObjectiveItem>
        );
    });

    return (
        <StyledSection id="Objectives">
            <StyledContainer>
                <Subtitle>Objectives</Subtitle>
                <SectionTitle>Make a Global Impact</SectionTitle>
                <ObjectivesGrid className="statistics">
                    {objectivesStats}
                </ObjectivesGrid>
                {/* <ObjectivesGrid className="statistics">
                    {objectivesStatsCited}
                </ObjectivesGrid> */}
            </StyledContainer>
        </StyledSection>
    );
};

export default Objectives;

const StyledSection = styled(Section)`
    padding-bottom: 120px;
`;
const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
    color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;
    text-align: center;
`;

const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 12px;
    text-align: center;
`;

const ObjectivesGrid = styled.div`
    max-width: 670px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 40px;
    grid-row-gap: 35px;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: 1fr;
        padding: 0 64px;
    }
`;

const ObjectiveItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ObjectiveIcon = styled.span`
    font-size: 2.75rem;
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
`;

const ObjectiveTitle = styled.h5`
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 0px;
    line-height: 30px;
    margin-bottom: 10px;
`;

const ObjectiveText = styled.p`
    text-align: center;
`;
