import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Documents.module.scss';

type Item = {
    name: string;
    path: string;
    downloadName?: string;
};

type DocumentsProps = {
    items: Item[];
    title: string;
    className?: string;
};

const Documents = ({ title, items, className }: DocumentsProps) => {
    return (
        <ul className={classNames(styles.wrapper, className)}>
            <h3 className='font-size-23 font-weight-400'>{title}</h3>
            {items.map((item, i) => (
                <li key={i} className='radius-17'>
                    <a href={item.path} download={item.downloadName ?? item.name}>
                        {item.name}
                        <Icon name='download' />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Documents;