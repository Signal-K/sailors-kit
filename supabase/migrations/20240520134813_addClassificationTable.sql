create table
  public.classifications (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    content character varying null,
    author uuid null,
    anomaly bigint null,
    classificationType text null,
    media json null,
    constraint classifications_pkey primary key (id),
    constraint classifications_anomaly_fkey foreign key (anomaly) references "anomalies" (id),
    constraint classifications_author_fkey foreign key (author) references profiles (id)
) tablespace pg_default;
