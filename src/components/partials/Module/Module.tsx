import type { Ref, ReactNode } from 'react';

import { forwardRef } from 'react';
import classNames from 'classnames';

type ModuleProps = {
    children: ReactNode;
    paddingBlock?: boolean;
    className?: string;
    id?: string;
}

const Module = forwardRef(({ children, paddingBlock, className, id }: ModuleProps, _ref: Ref<HTMLElement>) => {
    return (
        <section ref={_ref} className={classNames('module-wrapper', paddingBlock && 'padding-block', className)} id={id ?? ''}>
            {children}
        </section>
    );
});

Module.displayName = 'Module';

export default Module;