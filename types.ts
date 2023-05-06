export interface JsonMark {
  type: string;
  attrs?: Record<string, any>;
}

export interface JsonNode {
  type: string;
  marks?: JsonMark[];
  content?: JsonNode[];
  text?: string;
  attrs?: Record<string, any>;
}
