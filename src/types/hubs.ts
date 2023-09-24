export enum STAGE {
  FULLY_ONBOARDED = "FULLY_ONBOARDED",
  PILOT = "PILOT",
}

export enum STATE {
  DEMO = "DEMO",
  ACTIVE = "ACTIVE",
}

export enum CATEGORY {
  ASSIGNABLE = "ASSIGNABLE",
  PORTFOLIO = "PORTFOLIO",
}

export enum QUANTITY_UNIT {
  KG = "KG",
}

export enum PAGE_MODE {
  RELEASED = "RELEASED",
}

export enum RECOVERY_STATE {
  UNASSIGNED = "UNASSIGNED",
  PARTIALLY_ASSIGNED = "PARTIALLY_ASSIGNED",
}

export type Hub = {
  uuid: string;
  state: STATE;
  category: CATEGORY;
  stage: STAGE;
  name: string;
  displayName: string;
  slug: string;
  type: string;
  location: string;
  externalId: string;
  recoveredQuantity: number;
  recoveredQuantityUnit: QUANTITY_UNIT;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: string;
  pageMode: PAGE_MODE;
  hubUnassignedRecoveryList: HubUnassignedRecoveryList[];
  referenceQuantityUnit: QUANTITY_UNIT;
  parentHubName: string;
  logo: Logo;
  cardDescription: string;
  cardImage: CardImage;
  thankYouNote: string;
  portfolioAssignedQuantityPercentage: any;
  unassignedQuantityPercentage: number;
  unassignedQuantityTotal: number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
};

export type HubUnassignedRecoveryList = {
  uuid: string;
  createdAt: string;
  state: RECOVERY_STATE;
  unassignedQuantity: number;
  assignedQuantity: number;
  quantityUnit: QUANTITY_UNIT;
};

export type Logo = {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  processedDirectLink: any;
  processedThumbnailDirectLink: any;
  fileName: string;
  size: number;
};

export type CardImage = {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  processedDirectLink: any;
  processedThumbnailDirectLink: any;
  fileName: string;
  size: number;
};
