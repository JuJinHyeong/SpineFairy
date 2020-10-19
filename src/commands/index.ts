import CommandHandler from './CommandHandler';
import start from './start';
import end from './end';

interface HandlerMapper {
  [key: string]: CommandHandler;
}

const mapper: HandlerMapper = { start, end };

export default mapper;
