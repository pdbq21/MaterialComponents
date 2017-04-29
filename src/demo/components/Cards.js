/**
 * Created by ruslan on 13.03.17.
 */
import React from 'react';
import {
    Card,
    CardHorizontalBlock,
    CardMedia,
    CardMediaItem,
    CardSupportingText,
    CardPrimary,
    CardPrimaryTitle,
    CardPrimarySubtitle,
    CardActions,
    CardActionItem
} from '../../app/lib'

export default function Cards() {
    return (
        <div>
            <fieldset>
                <legend>Card</legend>
                <Card className='mdc-card--demo'>
                    <CardMedia
                        style={{
                            'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                            'height': '10em'
                        }}/>
                    <CardSupportingText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </CardSupportingText>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardPrimary>
                        <CardPrimaryTitle>Title</CardPrimaryTitle>
                        <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                    </CardPrimary>
                    <CardMedia
                        style={{
                            'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                            'height': '10em'
                        }}/>
                    <CardSupportingText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </CardSupportingText>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardPrimary>
                        <CardPrimaryTitle>Title</CardPrimaryTitle>
                        <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                    </CardPrimary>
                    <CardMedia
                        style={{
                            'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                            'height': '10em'
                        }}/>
                    <CardActions vertical>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardMedia
                        style={{
                            'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                            'height': '10em'
                        }}/>
                    <CardPrimary>
                        <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                        <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                    </CardPrimary>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardPrimary>
                        <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                        <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                    </CardPrimary>
                    <CardSupportingText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </CardSupportingText>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardMedia
                        style={{
                            'backgroundImage': 'url(http://material-components-web.appspot.com/images/1-1.jpg)',
                            'height': '10em'
                        }}>
                        <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                    </CardMedia>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardHorizontalBlock>
                        <CardPrimary>
                            <CardPrimaryTitle large>Title</CardPrimaryTitle>
                            <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                        </CardPrimary>
                        <CardMediaItem src="http://material-components-web.appspot.com/images/1-1.jpg" />
                    </CardHorizontalBlock>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>

                <Card className='mdc-card--demo'>
                    <CardHorizontalBlock>
                        <CardPrimary>
                            <CardPrimaryTitle large >Title</CardPrimaryTitle>
                            <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                        </CardPrimary>
                        <CardMediaItem size='1.5' src="http://material-components-web.appspot.com/images/1-1.jpg" />
                    </CardHorizontalBlock>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>
                <Card className='mdc-card--demo'>
                    <CardHorizontalBlock>
                        <CardPrimary>
                            <CardPrimaryTitle large >Title</CardPrimaryTitle>
                            <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                        </CardPrimary>
                        <CardMediaItem size='2' src="http://material-components-web.appspot.com/images/1-1.jpg" />
                    </CardHorizontalBlock>
                    <CardActions>
                        <CardActionItem compact>Action 1</CardActionItem>
                        <CardActionItem compact>Action 2</CardActionItem>
                    </CardActions>
                </Card>
                <Card className='mdc-card--demo'>
                    <CardHorizontalBlock>
                        <CardMediaItem size='3' src="http://material-components-web.appspot.com/images/1-1.jpg" />
                        <CardActions vertical>
                            <CardActionItem compact>A 1</CardActionItem>
                            <CardActionItem compact>A 2</CardActionItem>
                        </CardActions>
                    </CardHorizontalBlock>
                </Card>

            </fieldset>
        </div>
    );
}
