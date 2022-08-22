export interface GoogleAPISheet {
    spreadsheetId:  string;
    properties:     GoogleAPISheetProperties;
    sheets:         Sheet[];
    spreadsheetUrl: string;
}

export interface GoogleAPISheetProperties {
    title:            string;
    locale:           string;
    autoRecalc:       string;
    timeZone:         string;
    defaultFormat:    DefaultFormat;
    spreadsheetTheme: SpreadsheetTheme;
}

export interface DefaultFormat {
    backgroundColor:      Color;
    padding:              Padding;
    verticalAlignment:    string;
    wrapStrategy:         WrapStrategy;
    textFormat:           DefaultFormatTextFormat;
    backgroundColorStyle: BackgroundColorStyle;
}

export interface Color {
    red?:   number;
    green?: number;
    blue?:  number;
}

export interface BackgroundColorStyle {
    rgbColor: Color;
}

export interface Padding {
    top:    number;
    right:  number;
    bottom: number;
    left:   number;
}

export interface DefaultFormatTextFormat {
    foregroundColor:      ColorClass;
    fontFamily:           string;
    fontSize:             number;
    bold:                 boolean;
    italic:               boolean;
    strikethrough:        boolean;
    underline:            boolean;
    foregroundColorStyle: ColorStyle;
}

export interface ColorClass {
}

export interface ColorStyle {
    rgbColor: ColorClass;
}

export enum WrapStrategy {
    OverflowCell = "OVERFLOW_CELL",
}

export interface SpreadsheetTheme {
    primaryFontFamily: FontFamily;
    themeColors:       ThemeColor[];
}

export enum FontFamily {
    Arial = "Arial",
    Comfortaa = "Comfortaa",
}

export interface ThemeColor {
    colorType: string;
    color:     BackgroundColorStyle;
}

export interface Sheet {
    properties: SheetProperties;
    data:       Datum[];
}

export interface Datum {
    startRow:       number;
    rowData:        RowDatum[];
    rowMetadata:    Metadatum[];
    columnMetadata: Metadatum[];
}

export interface Metadatum {
    pixelSize: number;
}

export interface RowDatum {
    values: Value[];
}

export interface Value {
    userEnteredValue:  EffectiveValueClass;
    effectiveValue:    EffectiveValueClass;
    formattedValue:    string;
    userEnteredFormat: UserEnteredFormat;
    effectiveFormat:   EffectiveFormat;
    textFormatRuns?:   TextFormatRun[];
    hyperlink?:        string;
}

export interface EffectiveFormat {
    backgroundColor:      Color;
    borders:              Borders;
    padding:              Padding;
    horizontalAlignment:  HorizontalAlignment;
    verticalAlignment:    VerticalAlignment;
    wrapStrategy:         WrapStrategy;
    textFormat:           EffectiveFormatTextFormat;
    hyperlinkDisplayType: HyperlinkDisplayType;
    backgroundColorStyle: BackgroundColorStyle;
}

export interface Borders {
    top:    Bottom;
    bottom: Bottom;
    left?:  Bottom;
    right:  Bottom;
}

export interface Bottom {
    style:      Style;
    width:      number;
    color:      ColorClass;
    colorStyle: ColorStyle;
}

export enum Style {
    Solid = "SOLID",
    SolidMedium = "SOLID_MEDIUM",
}

export enum HorizontalAlignment {
    Center = "CENTER",
    Left = "LEFT",
}

export enum HyperlinkDisplayType {
    Linked = "LINKED",
    PlainText = "PLAIN_TEXT",
}

export interface EffectiveFormatTextFormat {
    foregroundColor:      Color;
    fontFamily:           FontFamily;
    fontSize:             number;
    bold:                 boolean;
    italic:               boolean;
    strikethrough:        boolean;
    underline:            boolean;
    foregroundColorStyle: BackgroundColorStyle;
    link?:                Link;
}

export interface Link {
    uri: string;
}

export enum VerticalAlignment {
    Middle = "MIDDLE",
}

export interface EffectiveValueClass {
    stringValue?: string;
    numberValue?: number;
}

export interface TextFormatRun {
    format:      Format;
    startIndex?: number;
}

export interface Format {
    bold?: boolean;
}

export interface UserEnteredFormat {
    borders:               Borders;
    horizontalAlignment:   HorizontalAlignment;
    verticalAlignment:     VerticalAlignment;
    textFormat:            UserEnteredFormatTextFormat;
    hyperlinkDisplayType?: HyperlinkDisplayType;
}

export interface UserEnteredFormatTextFormat {
    fontFamily:            FontFamily;
    fontSize:              number;
    bold?:                 boolean;
    italic?:               boolean;
    foregroundColor?:      Color;
    underline?:            boolean;
    foregroundColorStyle?: BackgroundColorStyle;
    link?:                 Link;
}

export interface SheetProperties {
    sheetId:        number;
    title:          string;
    index:          number;
    sheetType:      string;
    gridProperties: GridProperties;
}

export interface GridProperties {
    rowCount:    number;
    columnCount: number;
}


const body: GoogleAPISheet = {
    "spreadsheetId": "1V2ZpuUI_laRO4NkBaAqyCx1uMbYdu1y0YWCFt70fumY",
    "properties": {
      "title": "Horarios 1-2022",
      "locale": "es_ES",
      "autoRecalc": "ON_CHANGE",
      "timeZone": "America/Caracas",
      "defaultFormat": {
        "backgroundColor": {
          "red": 1,
          "green": 1,
          "blue": 1
        },
        "padding": {
          "top": 2,
          "right": 3,
          "bottom": 2,
          "left": 3
        },
        "verticalAlignment": "BOTTOM",
        "wrapStrategy": "OVERFLOW_CELL",
        "textFormat": {
          "foregroundColor": {},
          "fontFamily": "arial,sans,sans-serif",
          "fontSize": 10,
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "foregroundColorStyle": {
            "rgbColor": {}
          }
        },
        "backgroundColorStyle": {
          "rgbColor": {
            "red": 1,
            "green": 1,
            "blue": 1
          }
        }
      },
      "spreadsheetTheme": {
        "primaryFontFamily": "Arial",
        "themeColors": [
          {
            "colorType": "TEXT",
            "color": {
              "rgbColor": {}
            }
          },
          {
            "colorType": "BACKGROUND",
            "color": {
              "rgbColor": {
                "red": 1,
                "green": 1,
                "blue": 1
              }
            }
          },
          {
            "colorType": "ACCENT1",
            "color": {
              "rgbColor": {
                "red": 0.25882354,
                "green": 0.52156866,
                "blue": 0.95686275
              }
            }
          },
          {
            "colorType": "ACCENT2",
            "color": {
              "rgbColor": {
                "red": 0.91764706,
                "green": 0.2627451,
                "blue": 0.20784314
              }
            }
          },
          {
            "colorType": "ACCENT3",
            "color": {
              "rgbColor": {
                "red": 0.9843137,
                "green": 0.7372549,
                "blue": 0.015686275
              }
            }
          },
          {
            "colorType": "ACCENT4",
            "color": {
              "rgbColor": {
                "red": 0.20392157,
                "green": 0.65882355,
                "blue": 0.3254902
              }
            }
          },
          {
            "colorType": "ACCENT5",
            "color": {
              "rgbColor": {
                "red": 1,
                "green": 0.42745098,
                "blue": 0.003921569
              }
            }
          },
          {
            "colorType": "ACCENT6",
            "color": {
              "rgbColor": {
                "red": 0.27450982,
                "green": 0.7411765,
                "blue": 0.7764706
              }
            }
          },
          {
            "colorType": "LINK",
            "color": {
              "rgbColor": {
                "red": 0.06666667,
                "green": 0.33333334,
                "blue": 0.8
              }
            }
          }
        ]
      }
    },
    "sheets": [
      {
        "properties": {
          "sheetId": 0,
          "title": "Hoja 1",
          "index": 0,
          "sheetType": "GRID",
          "gridProperties": {
            "rowCount": 1006,
            "columnCount": 27
          }
        },
        "data": [
          {
            "startRow": 5,
            "rowData": [
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "stringValue": "Nro"
                    },
                    "effectiveValue": {
                      "stringValue": "Nro"
                    },
                    "formattedValue": "Nro",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "CARRERA"
                    },
                    "effectiveValue": {
                      "stringValue": "CARRERA"
                    },
                    "formattedValue": "CARRERA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "GESTIÓN"
                    },
                    "effectiveValue": {
                      "stringValue": "GESTIÓN"
                    },
                    "formattedValue": "GESTIÓN",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "HORARIOS"
                    },
                    "effectiveValue": {
                      "stringValue": "HORARIOS"
                    },
                    "formattedValue": "HORARIOS",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 14,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 1
                    },
                    "effectiveValue": {
                      "numberValue": 1
                    },
                    "formattedValue": "1",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "409701 ALIMENTOS"
                    },
                    "effectiveValue": {
                      "stringValue": "409701 ALIMENTOS"
                    },
                    "formattedValue": "409701 ALIMENTOS",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "textFormatRuns": [
                      {
                        "format": {
                          "bold": true
                        }
                      },
                      {
                        "startIndex": 6,
                        "format": {}
                      }
                    ]
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 2
                    },
                    "effectiveValue": {
                      "numberValue": 2
                    },
                    "formattedValue": "2",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "399501 BIOLOGIA"
                    },
                    "effectiveValue": {
                      "stringValue": "399501 BIOLOGIA"
                    },
                    "formattedValue": "399501 BIOLOGIA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "textFormatRuns": [
                      {
                        "format": {
                          "bold": true
                        }
                      },
                      {
                        "startIndex": 6,
                        "format": {}
                      }
                    ]
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 3
                    },
                    "effectiveValue": {
                      "numberValue": 3
                    },
                    "formattedValue": "3",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "320902 CIVIL (NUEVO)"
                    },
                    "effectiveValue": {
                      "stringValue": "320902 CIVIL (NUEVO)"
                    },
                    "formattedValue": "320902 CIVIL (NUEVO)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "textFormatRuns": [
                      {
                        "format": {
                          "bold": true
                        }
                      },
                      {
                        "startIndex": 6,
                        "format": {}
                      }
                    ]
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 320902
                    },
                    "effectiveValue": {
                      "numberValue": 320902
                    },
                    "formattedValue": "320902",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uaWoTqV0Cmy1gP8gy48MmGuDjL5v402Y/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uaWoTqV0Cmy1gP8gy48MmGuDjL5v402Y/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uaWoTqV0Cmy1gP8gy48MmGuDjL5v402Y/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 4
                    },
                    "effectiveValue": {
                      "numberValue": 4
                    },
                    "formattedValue": "4",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "299701 ELECTRICA"
                    },
                    "effectiveValue": {
                      "stringValue": "299701 ELECTRICA"
                    },
                    "formattedValue": "299701 ELECTRICA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "textFormatRuns": [
                      {
                        "format": {
                          "bold": true
                        }
                      },
                      {
                        "startIndex": 6,
                        "format": {}
                      }
                    ]
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 299701
                    },
                    "effectiveValue": {
                      "numberValue": 299701
                    },
                    "formattedValue": "299701",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1UcjDTjeOb1PATo1U0B-75qLPqVQJYG0F/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1UcjDTjeOb1PATo1U0B-75qLPqVQJYG0F/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1UcjDTjeOb1PATo1U0B-75qLPqVQJYG0F/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 5
                    },
                    "effectiveValue": {
                      "numberValue": 5
                    },
                    "formattedValue": "5",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "650001 ELECTROMECANICA"
                    },
                    "effectiveValue": {
                      "stringValue": "650001 ELECTROMECANICA"
                    },
                    "formattedValue": "650001 ELECTROMECANICA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 6
                    },
                    "effectiveValue": {
                      "numberValue": 6
                    },
                    "formattedValue": "6",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "429701 ELECTRONICA"
                    },
                    "effectiveValue": {
                      "stringValue": "429701 ELECTRONICA"
                    },
                    "formattedValue": "429701 ELECTRONICA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 429701
                    },
                    "effectiveValue": {
                      "numberValue": 429701
                    },
                    "formattedValue": "429701",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1XPKXUJGUwe4AHfnVcXm17XY2elZBY_Dv/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1XPKXUJGUwe4AHfnVcXm17XY2elZBY_Dv/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1XPKXUJGUwe4AHfnVcXm17XY2elZBY_Dv/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 7
                    },
                    "effectiveValue": {
                      "numberValue": 7
                    },
                    "formattedValue": "7",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "760101 FISICA (DID)"
                    },
                    "effectiveValue": {
                      "stringValue": "760101 FISICA (DID)"
                    },
                    "formattedValue": "760101 FISICA (DID)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 8
                    },
                    "effectiveValue": {
                      "numberValue": 8
                    },
                    "formattedValue": "8",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "359201 FISICA (LIC)"
                    },
                    "effectiveValue": {
                      "stringValue": "359201 FISICA (LIC)"
                    },
                    "formattedValue": "359201 FISICA (LIC)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 9
                    },
                    "effectiveValue": {
                      "numberValue": 9
                    },
                    "formattedValue": "9",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "309801 INDUSTRIAL"
                    },
                    "effectiveValue": {
                      "stringValue": "309801 INDUSTRIAL"
                    },
                    "formattedValue": "309801 INDUSTRIAL",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 10
                    },
                    "effectiveValue": {
                      "numberValue": 10
                    },
                    "formattedValue": "10",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "134111 INFORMATICA (ING)"
                    },
                    "effectiveValue": {
                      "stringValue": "134111 INFORMATICA (ING)"
                    },
                    "formattedValue": "134111 INFORMATICA (ING)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 134111
                    },
                    "effectiveValue": {
                      "numberValue": 134111
                    },
                    "formattedValue": "134111",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1ARYjmJb0yb3184-4e-LlZ4vaLl1Fvzaa/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1ARYjmJb0yb3184-4e-LlZ4vaLl1Fvzaa/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1ARYjmJb0yb3184-4e-LlZ4vaLl1Fvzaa/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 11
                    },
                    "effectiveValue": {
                      "numberValue": 11
                    },
                    "formattedValue": "11",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "114071 MATEMATICA (DID)"
                    },
                    "effectiveValue": {
                      "stringValue": "114071 MATEMATICA (DID)"
                    },
                    "formattedValue": "114071 MATEMATICA (DID)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 12
                    },
                    "effectiveValue": {
                      "numberValue": 12
                    },
                    "formattedValue": "12",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "439801 MATEMATICA (ING)"
                    },
                    "effectiveValue": {
                      "stringValue": "439801 MATEMATICA (ING)"
                    },
                    "formattedValue": "439801 MATEMATICA (ING)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 13
                    },
                    "effectiveValue": {
                      "numberValue": 13
                    },
                    "formattedValue": "13",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "349701 MATEMATICA (LIC)"
                    },
                    "effectiveValue": {
                      "stringValue": "349701 MATEMATICA (LIC)"
                    },
                    "formattedValue": "349701 MATEMATICA (LIC)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 14
                    },
                    "effectiveValue": {
                      "numberValue": 14
                    },
                    "formattedValue": "14",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "319801 MECANICA"
                    },
                    "effectiveValue": {
                      "stringValue": "319801 MECANICA"
                    },
                    "formattedValue": "319801 MECANICA",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 15
                    },
                    "effectiveValue": {
                      "numberValue": 15
                    },
                    "formattedValue": "15",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "339701 QUIMICA (ING)"
                    },
                    "effectiveValue": {
                      "stringValue": "339701 QUIMICA (ING)"
                    },
                    "formattedValue": "339701 QUIMICA (ING)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 16
                    },
                    "effectiveValue": {
                      "numberValue": 16
                    },
                    "formattedValue": "16",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "389701 QUIMICA (LIC)"
                    },
                    "effectiveValue": {
                      "stringValue": "389701 QUIMICA (LIC)"
                    },
                    "formattedValue": "389701 QUIMICA (LIC)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "Aviso"
                    },
                    "effectiveValue": {
                      "stringValue": "Aviso"
                    },
                    "formattedValue": "Aviso",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uBBMd0jKvkaFUwFDG5vLkVHyN6_SpnHM/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 17
                    },
                    "effectiveValue": {
                      "numberValue": 17
                    },
                    "formattedValue": "17",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "419701 SISTEMAS (ANTIGUO)"
                    },
                    "effectiveValue": {
                      "stringValue": "419701 SISTEMAS (ANTIGUO)"
                    },
                    "formattedValue": "419701 SISTEMAS (ANTIGUO)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 419701
                    },
                    "effectiveValue": {
                      "numberValue": 419701
                    },
                    "formattedValue": "419701",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1qbGFZ07c4AgdNAupWubR0CM_YIF9ID75/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1qbGFZ07c4AgdNAupWubR0CM_YIF9ID75/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1qbGFZ07c4AgdNAupWubR0CM_YIF9ID75/view?usp=sharing"
                  }
                ]
              },
              {
                "values": [
                  {
                    "userEnteredValue": {
                      "numberValue": 18
                    },
                    "effectiveValue": {
                      "numberValue": 18
                    },
                    "formattedValue": "18",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "italic": true
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID",
                          "width": 1,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Arial",
                        "fontSize": 10,
                        "bold": false,
                        "italic": true,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "411702 SISTEMAS (NUEVO)"
                    },
                    "effectiveValue": {
                      "stringValue": "411702 SISTEMAS (NUEVO)"
                    },
                    "formattedValue": "411702 SISTEMAS (NUEVO)",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "LEFT",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "stringValue": "1 / 2022"
                    },
                    "effectiveValue": {
                      "stringValue": "1 / 2022"
                    },
                    "formattedValue": "1 / 2022",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "fontFamily": "Comfortaa",
                        "fontSize": 12
                      }
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {},
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "foregroundColorStyle": {
                          "rgbColor": {}
                        }
                      },
                      "hyperlinkDisplayType": "PLAIN_TEXT",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    }
                  },
                  {
                    "userEnteredValue": {
                      "numberValue": 411702
                    },
                    "effectiveValue": {
                      "numberValue": 411702
                    },
                    "formattedValue": "411702",
                    "userEnteredFormat": {
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uL_l83K25v1Q3dABT76kPOu00m05La-I/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED"
                    },
                    "effectiveFormat": {
                      "backgroundColor": {
                        "red": 1,
                        "green": 1,
                        "blue": 1
                      },
                      "borders": {
                        "top": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "bottom": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "left": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        },
                        "right": {
                          "style": "SOLID_MEDIUM",
                          "width": 2,
                          "color": {},
                          "colorStyle": {
                            "rgbColor": {}
                          }
                        }
                      },
                      "padding": {
                        "top": 2,
                        "right": 3,
                        "bottom": 2,
                        "left": 3
                      },
                      "horizontalAlignment": "CENTER",
                      "verticalAlignment": "MIDDLE",
                      "wrapStrategy": "OVERFLOW_CELL",
                      "textFormat": {
                        "foregroundColor": {
                          "red": 0.06666667,
                          "green": 0.33333334,
                          "blue": 0.8
                        },
                        "fontFamily": "Comfortaa",
                        "fontSize": 12,
                        "bold": true,
                        "italic": false,
                        "strikethrough": false,
                        "underline": true,
                        "foregroundColorStyle": {
                          "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                          }
                        },
                        "link": {
                          "uri": "https://drive.google.com/file/d/1uL_l83K25v1Q3dABT76kPOu00m05La-I/view?usp=sharing"
                        }
                      },
                      "hyperlinkDisplayType": "LINKED",
                      "backgroundColorStyle": {
                        "rgbColor": {
                          "red": 1,
                          "green": 1,
                          "blue": 1
                        }
                      }
                    },
                    "hyperlink": "https://drive.google.com/file/d/1uL_l83K25v1Q3dABT76kPOu00m05La-I/view?usp=sharing"
                  }
                ]
              }
            ],
            "rowMetadata": [
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 43
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 64
              },
              {
                "pixelSize": 61
              },
              {
                "pixelSize": 68
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              },
              {
                "pixelSize": 40
              }
            ],
            "columnMetadata": [
              {
                "pixelSize": 88
              },
              {
                "pixelSize": 307
              },
              {
                "pixelSize": 151
              },
              {
                "pixelSize": 401
              }
            ]
          }
        ]
      }
    ],
    "spreadsheetUrl": "https://docs.google.com/spreadsheets/d/1V2ZpuUI_laRO4NkBaAqyCx1uMbYdu1y0YWCFt70fumY/edit"
  }


const urls = [];
body.sheets?.forEach(sheet => {
    sheet.data?.forEach(singleData => {
        singleData.rowData?.forEach(row => {
            row.values?.forEach(value => {
                const uri = value?.userEnteredFormat?.textFormat?.link?.uri; //?
                if (uri) {
                    urls.push(uri) 
                }
            })
        })
    })
})


body.sheets.forEach(sheet => {
    try {
        sheet.data.forEach(singleData => {
            singleData.rowData.forEach(row => {
                row.values.forEach(value => {
                    const uri = value.userEnteredFormat.textFormat.link.uri;
                    if (uri) {
                        urls.push(uri) 
                    }
                })
            })
        })
    } catch (error) { }
})