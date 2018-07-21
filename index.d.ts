
interface ISceneConfigs {
    PushFromRight: object,
    PushFromLeft: object,
    PushToRight: object,
    FloatFromRight: object,
    FloatFromLeft: object,
    FloatFromBottom: object,
    FloatFromBottomAndroid: object,
    FadeAndroid: object,
    SwipeFromLeft: object,
    HorizontalSwipeJump: object,
    HorizontalSwipeJumpFromRight: object,
    HorizontalSwipeJumpFromLeft: object,
    VerticalUpSwipeJump: object,
    VerticalDownSwipeJump: object,
}

declare class Navigator {
    static SceneConfigs: ISceneConfigs;
    getCurrentRoutes: () => [any];
    jumpBack: () => void;
    jumpForward: () => void;
    jumpTo: (route: object) => void;
    push: (route: object) => void;
    pop: () => void;
    replace: (route: object) => void;
    replaceAtIndex: (route: object, index: number) => void;
    replacePrevious: (route: object) => void;
    resetTo: (route: object) => void;
    immediatelyResetRouteStack: (routeStack: [any]) => void;
    popToRoute: (route: object) => void;
    popToTop: () => void;
}