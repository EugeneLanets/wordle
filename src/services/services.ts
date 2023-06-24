import configureRedux from './store';
import { type ConfigType } from '../config';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

class Services {
  private readonly config: ConfigType;
  private _redux: ToolkitStore | undefined;
  constructor(config: any) {
    this.config = config;
  }

  get redux(): any {
    if (this._redux === undefined) {
      this._redux = configureRedux(this, this.config.redux);
    }

    return this._redux;
  }
}

export default Services;
