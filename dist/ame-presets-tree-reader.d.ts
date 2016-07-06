/// <reference path="../typings/main.d.ts" />
import q = require('q');
export interface IAMEPresetsCache {
    registry: {
        [key: string]: IAMEPreset;
    };
    list: Array<IAMEPreset>;
}
export declare class AMEPresetsCacheReader {
    static load(path: string): q.Promise<IAMEPresetsCache>;
    static _loadKeys(parentKeyNode: any, cache: IAMEPresetsCache): void;
}
export interface IAMEPresetsTree {
    all: {
        [key: string]: IAMEPresetsTreeItem;
    };
    userPresets: Array<IAMEPresetsTreeItem>;
    systemPresets: Array<IAMEPresetsTreeItem>;
}
export declare class AMEPresetsTreeReader {
    static load(path: string): q.Promise<IAMEPresetsTree>;
    private static _loadPresetsTree(parentNode, registry, sort?, parentPath?);
}
export declare enum AMEPresetsTreeItemType {
    Preset = 0,
    Folder = 1,
}
export interface IAMEPresetsTreeItem {
    itemType: AMEPresetsTreeItemType;
    itemTypeText: string;
    comment: string;
    isFolder: boolean;
    isExpanded?: boolean;
    folderState?: string;
    targetRate?: string;
    fps?: string;
    frameSize?: string;
    presetType?: any;
    folderZName: string;
    formatName: string;
    name: string;
    subList?: Array<IAMEPresetsTreeItem>;
    preset?: IAMEPreset;
    toolTipSummary: string;
    icon?: string;
}
export interface IAMEPreset {
    id: string;
    path: string;
    fileType: string;
    classId: string;
    name: string;
    modifiedTime: string;
    folderDisplayPath: string;
    displayName?: string;
}
