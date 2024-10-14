import { device, element, by, expect } from 'detox';
import { deleteImage, uploadImage } from '../utils/api';

const getSystemDialog = (label: string) => {
  if (device.getPlatform() === 'ios') {
    return element(by.label(label)).atIndex(0);
  }
  return element(by.text(label));
};

describe('KittyGram home screen with a fresh account', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the empty list with no images message', async () => {
    await expect(element(by.id('NoData<CatCard>'))).toBeVisible();
  });

  it.skip('should be able to upload a photo', () => {
    // This test is skipped because it requires relatively extensive system
    // dialog handling which is not yet supported by Detox on Android.
    // See https://wix.github.io/Detox/docs/api/system/#bysystemlabellabel
  });

  it('should be able to remove a photo', async () => {
    const image = await uploadImage();
    await device.reloadReactNative();

    const deleteButton = element(by.id(`Card.Button<Delete>.${image.id}`));
    await expect(deleteButton).toBeVisible();
    await deleteButton.tap();

    await getSystemDialog('Confirm').tap();

    await expect(element(by.id('NoData<CatCard>'))).toBeVisible();
  });
});

describe('KittyGram home screen with an existing account', () => {
  let image;

  beforeEach(async () => {
    image = await uploadImage();
    await device.reloadReactNative();
  });

  afterEach(async () => {
    await deleteImage(image.id);
  });

  it('should display a single image', async () => {
    await expect(element(by.id('List<CatCard>'))).toBeVisible();
  });

  it('should be able to upvote a photo', async () => {
    const upvoteButton = element(by.id(`Card.Button<Upvote>.${image.id}`));

    await expect(upvoteButton).toBeVisible();
    await expect(element(by.id(`Card.Score.${image.id}`))).toHaveText('0');

    await upvoteButton.tap();
    await expect(element(by.id(`Card.Score.${image.id}`))).toHaveText('1');
  });

  it('should be able to downvote a photo', async () => {
    const downvoteButton = element(by.id(`Card.Button<Downvote>.${image.id}`));

    await expect(downvoteButton).toBeVisible();
    await expect(element(by.id(`Card.Score.${image.id}`))).toHaveText('0');

    await downvoteButton.tap();
    await expect(element(by.id(`Card.Score.${image.id}`))).toHaveText('-1');
  });

  it('should be able to favourite and unfavourite a photo', async () => {
    const favouriteButton = element(
      by.id(`Card.Button<Favourite>.${image.id}`)
    );
    const unfavouriteButton = element(
      by.id(`Card.Button<Unfavourite>.${image.id}`)
    );

    await expect(favouriteButton).toBeVisible();
    await expect(unfavouriteButton).not.toBeVisible();

    await favouriteButton.tap();

    await expect(favouriteButton).not.toBeVisible();
    await expect(unfavouriteButton).toBeVisible();

    await unfavouriteButton.tap();

    await expect(favouriteButton).toBeVisible();
    await expect(unfavouriteButton).not.toBeVisible();
  });
});
