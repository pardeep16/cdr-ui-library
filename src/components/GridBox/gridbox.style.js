import {css} from '@emotion/css';

export const gridBoxStyles=css({
    ".cdr-ui-grid-box":css({
        width: '250px',
        background: '#07A0B4',
        borderRadius: '6px',
        "&:hover":css({
            background: '#053271',
            transition: 'all 0.3s ease-in-out'
        }),
        cursor:'pointer'
    }),
    ".cdr-ui-grid-box-text":css({
        fontFamily: 'inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '58px',
        textAlign: 'center',
        color: '#FFFFFF'

    })
});