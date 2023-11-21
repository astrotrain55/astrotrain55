import { BlockController } from './BlockController';
import { ajaxForm } from './ajaxForm';

BlockController.add(ajaxForm, '.js-ajax-form');

// первичная инициализация
BlockController.initAll();
