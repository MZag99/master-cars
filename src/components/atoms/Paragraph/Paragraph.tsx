import classNames from 'classnames';

import styles from './Paragraph.module.scss';

type ParagraphProps = {
    children: string;
    className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return <p className={classNames(styles.paragraph, 'font-size-16', className)} dangerouslySetInnerHTML={{ __html: children }}></p>;
};

export default Paragraph;