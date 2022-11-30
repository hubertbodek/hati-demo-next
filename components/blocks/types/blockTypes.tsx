import { CollapseProps } from '@/components/blocks/collapse/Collapse';
import { CollapseItemProps } from '@/components/blocks/collapse/CollapseItem';

import { RichTextProps } from '@/components/blocks/rich-text/RichText';

export type Typenames = 'ComponentBlockFaq' | 'ComponentBlockRichText';

interface WithTypenames {
	__typename: Typenames;
}

export type CollapseBlock = CollapseProps & WithTypenames;
export type CollapseItemBlock = CollapseItemProps & WithTypenames;
export type RichTextBlock = RichTextProps & WithTypenames;

export type Block = CollapseBlock | CollapseItemBlock | RichTextBlock;

export type BlocksCollection = Array<Block>;

type BlockMapperProps = {
	blocks: BlocksCollection;
};

export default BlockMapperProps;
