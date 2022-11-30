import * as Block from './index';
import BlockMapperProps, {
	CollapseBlock,
	RichTextBlock,
	Block as BlockType,
	Typenames,
} from './types/blockTypes';

type ComponentBlock = Omit<BlockType, '__typename'>;
type BlocksDict = Record<Typenames, (props: ComponentBlock) => JSX.Element>;

const blocksDict: BlocksDict = {
	ComponentBlockFaq: (props) => (
		<Block.Collapse {...(props as CollapseBlock)} />
	),
	ComponentBlockRichText: (props) => (
		<Block.RichText {...(props as RichTextBlock)} />
	),
};

const BlockMapper = ({ blocks }: BlockMapperProps) => {
	const renderBlocks = () =>
		blocks.map(({ __typename, ...props }, idx) => {
			const key = `${__typename}--${idx}`;
			const BlockComponent = blocksDict[__typename];

			return <BlockComponent key={key} {...props} />;
		});

	return <>{renderBlocks()}</>;
};

export default BlockMapper;
