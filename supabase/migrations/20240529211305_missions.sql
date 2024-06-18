CREATE TABLE public.missions (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY,
    "user" UUID NOT NULL,
    time_of_completion TIMESTAMP WITH TIME ZONE NULL,
    mission BIGINT NULL,
    configuration JSONB NULL,
    rewarded_items BIGINT[] NULL, -- New field to store rewarded item IDs
    CONSTRAINT missions_pkey PRIMARY KEY (id),
    CONSTRAINT missions_user_fkey FOREIGN KEY ("user") REFERENCES profiles (id)
        ON DELETE CASCADE
);