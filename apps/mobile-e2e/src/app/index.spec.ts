import { device, element, by, expect } from 'detox';

describe('KittyGram home screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should be able to upload a photo', () => {
  //
  // });

  // it('should be able to remove a photo', () => {
  //
  // });

  // it('should be able to upvote a photo', () => {
  //
  // });

  // it('should be able to downvote a photo', () => {
  //
  // });

  // it('should be able to favourite a photo', () => {
  //
  // });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText('Welcome Mobile 👋');
  });
});
