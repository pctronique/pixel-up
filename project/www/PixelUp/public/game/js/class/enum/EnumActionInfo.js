class EnumActionInfo {
  constructor(enumAction, name, description) {
      this.enumAction = enumAction;
      this.name = name;
      this.description = description;
  }

  getEnumAction() {
      return this.enumAction;
  }

  getName() {
      return this.name;
  }

  getDescription() {
      return this.description;
  }

  static actionInfo() {
      return [
          new EnumActionInfo(EnumAction.NULL, "NULL", "NULL"),
          new EnumActionInfo(EnumAction.STOP, "STOP", "STOP"),
          new EnumActionInfo(EnumAction.MORT, "MORT", "MORT"),
          new EnumActionInfo(EnumAction.TENUE, "TENUE", "TENUE"),
      ];
  }

  static actionInfoEnum(enumAction) {
      let TabEnum = EnumActionInfo.actionInfo();
      for (let index = 0; index < TabEnum.length; index++) {
          const element = TabEnum[index];
          if(element.getEnumAction() == enumAction) {
              return element;
          }
      }
  }
 
}