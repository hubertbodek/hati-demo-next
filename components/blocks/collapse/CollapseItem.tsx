import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { useRef } from 'react';

export interface CollapseItemProps {
	id?: string;
	title: string;
	body: string;
}

export type ItemProps = {
	isOpen: boolean;
	item: CollapseItemProps;
};

const CollapseItem = ({ isOpen, item }: ItemProps) => {
	const panelRef = useRef<HTMLDivElement>(null);
	return (
		<div className='my-2 collapse-item'>
			<Disclosure.Button className='w-full pt-4 relative z-10'>
				<div className={`flex w-full justify-between pb-2`}>
					<span className='text-sm lg:text-lg text-left'>{item.title}</span>
					<ChevronDownIcon
						className={`${
							isOpen && 'rotate-180'
						} h-4 w-4 lg:h-7 lg:w-7 text-primary transition`}
					/>
				</div>
			</Disclosure.Button>
			<Transition
				enter='transition duration-200 ease-in'
				enterFrom='scale-y-95 opacity-0'
				enterTo='scale-y-100 opacity-100'
				leave='transition duration-200 ease-out'
				leaveFrom='scale-y-100 opacity-100'
				leaveTo='scale-y-95 opacity-0'
			>
				<Disclosure.Panel
					ref={panelRef}
					className='w-full transition-all ease-out duration-200 max-h-0 relative z-0'
					style={{
						maxHeight: isOpen ? `${panelRef.current?.scrollHeight}px` : '',
					}}
				>
					<p className='pt-2 pb-4 px-1 text-sm text-gray-500'>{item.body}</p>
				</Disclosure.Panel>
			</Transition>
		</div>
	);
};

export default CollapseItem;
