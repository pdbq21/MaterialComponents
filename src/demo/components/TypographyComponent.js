/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';

import {
    Typography,
    TypographyDisplay,
    TypographyHeadline,
    TypographyTitle,
    TypographySubheading,
    TypographyBody,
    TypographyCaption
} from '../../app/lib'

export default function TypographyComponent() {

    return (
        <div >
            <fieldset>
                <legend>Typography</legend>

                <Typography>
                    <TypographyDisplay size="4">Display 4</TypographyDisplay>
                    <TypographyDisplay size="3">Display 3</TypographyDisplay>
                    <TypographyDisplay size="2">Display 2</TypographyDisplay>
                    <TypographyDisplay size="1">Display 1</TypographyDisplay>
                    <TypographyHeadline>Headline</TypographyHeadline>
                    <TypographyTitle>
                        Title
                        <TypographyCaption> Caption</TypographyCaption>
                    </TypographyTitle>
                    <TypographySubheading size="2">Subheading 2</TypographySubheading>
                    <TypographySubheading size="1">Subheading 1</TypographySubheading>
                    <TypographyBody size='1'>
                        Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </TypographyBody>
                    <TypographyBody size='2'>Body 2 text, calling something out.</TypographyBody>
                </Typography>
            </fieldset>
            <fieldset>
                <legend>Typography with margin adjustments</legend>

                <Typography>
                    <TypographyDisplay size="4" adjustMargin>Display 4</TypographyDisplay>
                    <TypographyDisplay size="3" adjustMargin>Display 3</TypographyDisplay>
                    <TypographyDisplay size="2" adjustMargin>Display 2</TypographyDisplay>
                    <TypographyDisplay size="1" adjustMargin>Display 1</TypographyDisplay>
                    <TypographyHeadline adjustMargin>Headline</TypographyHeadline>
                    <TypographyTitle adjustMargin>
                        Title
                        <TypographyCaption adjustMargin> Caption</TypographyCaption>
                    </TypographyTitle>
                    <TypographySubheading size="2" adjustMargin>Subheading 2</TypographySubheading>
                    <TypographySubheading size="1" adjustMargin>Subheading 1</TypographySubheading>
                    <TypographyBody size='1' adjustMargin>
                        Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </TypographyBody>
                    <TypographyBody size='2' adjustMargin>Body 2 text, calling something out.</TypographyBody>
                </Typography>
            </fieldset>
        </div>
    );
}