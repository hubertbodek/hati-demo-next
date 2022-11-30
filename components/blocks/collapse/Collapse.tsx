import React from 'react'

import { Disclosure } from '@headlessui/react'
import CollapseItem, { CollapseItemProps } from './CollapseItem'

export interface CollapseProps {
  title: string
  description: string
  faqs: CollapseItemProps[]
}

const Collapse = ({ title, description, faqs }: CollapseProps) => {
  return (
    <section className="container--limited mx-auto my-6 pb-12">
      <h2 className="text-h2 lg:text-center uppercase my-12 font-medium tracking-widest text-primary-dark">
        {title}
      </h2>
      <p className="text-paragraph-1 lg:text-center mx-auto max-w-xl mb-12">{description}</p>
      <div
        className="max-w-3xl mx-auto collapse-container"
        style={{ minHeight: `${faqs.length * 5}rem` }}
      >
        {faqs.map((faq) => (
          <Disclosure key={faq.title}>
            {({ open }) => <CollapseItem isOpen={open} item={faq} />}
          </Disclosure>
        ))}
      </div>
    </section>
  )
}

export default Collapse
