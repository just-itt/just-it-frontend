interface Tags {
  created_at: string;
  id: number;
  is_required: boolean;
  options: { id: number; title: string }[];
  title: string;
  updated_at: string | null;
}

export type TagsServerModel = Tags[];
