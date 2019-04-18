import * as React from 'react';
import {render} from "react-dom";

import {Wrapper, Label, Content, Group, Title} from "./lib";

const seperatorStyles = {
    height: '16px',
}
const Seperator = () => (
    <div style={seperatorStyles} type="seperator"></div>
);

const Paragraphs = () => (
    <Wrapper>
        <Content>Provides an aggregate limit for medical and non-medical expenses, with sub-limits for Funeral Expenses
            and Automobile Death Benefits.</Content>
        <Content>Your total coverage will be the sum of the coverage limits for all vehicles covered under your policy.
            Consider this option if you have multiple vehicles.</Content>
    </Wrapper>
);

const Chrome = () => (
    <div style={{width: 640, margin: "15px auto"}}>
        <Wrapper>
            <Label currency="$">1000</Label>
            <Label currency="$" multi={2}>
                {["$1M", "$2M"]}
            </Label>
            <Seperator/>

            <Content>Provides an aggregate limit for medical and non-medical expenses, with sub-limits for Funeral
                Expenses and Automobile Death Benefits.</Content>
            <Content>Your total coverage will be the sum of the coverage limits for all vehicles covered under your
                policy. Consider this option if you have multiple vehicles.</Content>
            <Group>
                {{
                    header: (
                        <Title>Please enter the following information:</Title>
                    ),
                    body: (
                        <Paragraphs/>
                    )
                }}
            </Group>
        </Wrapper>
    </div>
);

render(<Chrome/>, document.getElementById("root"));
