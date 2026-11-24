# Lab 00: Lab Environment and Conventions

**Course:** Advanced Big Data Systems (MS) - IU
**Read before Lab 01** and keep it open in every lab

## 1. How the labs work

Every lab session is 90 minutes:

| Time          | What happens                                                                                                                                     |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 60 min        | The instructor walks through the lab guide. You follow along in your own terminal. Every command in the guide is meant to be run. |
| 30 min        | Lab test on your laptop and graded automatically.                                           |
| After the lab | Do the 5 exercises at the end of the guide. They are not graded, but the test tasks are built from the same skills.                              |

The labs are for Track S. Theory questions are asked in the lectures and exams, not in the lab tests.

## 2. Lab schedule

| Week | Lab                                       | Main tools                                          |
|------|-------------------------------------------|-----------------------------------------------------|
| 1    | Cluster access and distributed storage    | HDFS, MinIO                                         |
| 2    | Spark and Spark SQL                       | Spark on YARN                                       |
| 3    | NoSQL data models                         | Cassandra/ScyllaDB, MongoDB                         |
| 4    | Kafka basics and your first Iceberg table | Kafka (KRaft), Spark, Iceberg                       |
| 5    | Inside Parquet and Iceberg                | PyArrow, Spark, Iceberg                             |
| 6    | Distributed query plans                   | Spark CBO, Trino                                    |
| 7    | One query, four engines                   | DuckDB, ClickHouse, Spark, Trino                    |
| 8    | *Midterm, no lab*                         |                                                     |
| 9    | Event time, windows and late data         | Flink SQL, Kafka                                    |
| 10   | Change data capture into the lakehouse    | PostgreSQL, Debezium, Kafka Connect, Spark, Iceberg |
| 11   | Distributed machine learning              | Spark MLlib, PyTorch DDP                            |
| 12   | Vector search at scale                    | sentence-transformers, FAISS, pgvector              |
| 13   | Elastic compute and concurrent writers    | Spark dynamic allocation, Iceberg, Trino            |
| 14   | Lineage, data quality and privacy         | OpenLineage, Marquez, Iceberg branches              |
| 15   | *Final exam and project defenses, no lab* |                                                     |

## 3. The cluster and its services

The course runs on a 4-node cluster. You work on the **entry node** over SSH. All other services are reached from there.

| Layer                    | Services                                                                            | From week |
|--------------------------|-------------------------------------------------------------------------------------|-----------|
| Storage                  | HDFS (4 DataNodes), MinIO (S3-compatible object store)                              | 1         |
| Resource management      | YARN                                                                                | 2         |
| Batch and SQL engines    | Spark, Trino, ClickHouse, DuckDB (local)                                            | 2, 6, 7   |
| Table format and catalog | Apache Iceberg; Spark catalog `lake` = Trino catalog `iceberg`                      | 4         |
| Operational databases    | Cassandra/ScyllaDB (3 nodes), MongoDB, PostgreSQL (with pgvector)                   | 3, 10, 12 |
| Streaming                | Kafka in KRaft mode (3 brokers), Kafka Connect with Debezium, Flink session cluster | 4, 9, 10  |
| ML and vectors           | PyTorch (CPU), FAISS, sentence-transformers                                         | 11, 12    |
| Governance               | Marquez (OpenLineage server)                                                        | 14        |

## 4. Placeholders

The guides write host names and paths as highlighted placeholders. The instructor gives you the real values in the first lab. Write them down here once and replace them whenever you copy a command.

| Placeholder       | Meaning                                                           | Example                                                   | Used in       |
|-------------------|-------------------------------------------------------------------|-----------------------------------------------------------|---------------|
| `MASTER_HOST`     | Entry node you SSH into                                           | `hadoop-01.uni.local`                                     | all           |
| `TEAM_USER`       | Your team's shared account: lowercase letters and digits only            | `team07`                                                 | all           |
| `DATA_DIR`        | Local folder with the course datasets on the entry node           | `/opt/datasets`                                           | 1, 3, 4, 7, 9 |
| `NAMENODE_UI`     | HDFS NameNode web UI                                              | `http://hadoop-01.uni.local:9870`                         | 1             |
| `YARN_UI`         | YARN ResourceManager web UI                                       | `http://hadoop-01.uni.local:8088`                         | 2 onward      |
| `MINIO_ENDPOINT`  | MinIO S3 endpoint, host:port                                      | `hadoop-01.uni.local:9000`                                | 1, 11         |
| `LAKE_BUCKET`     | MinIO bucket that holds the Iceberg warehouse (read-only for you) | `lakehouse`                                               | 5             |
| `CASSANDRA_HOST`  | Any node of the Cassandra/ScyllaDB cluster                        | `hadoop-02.uni.local`                                     | 3             |
| `MONGO_URI`       | Your team's MongoDB connection string                             | `mongodb://team07:***@hadoop-01.uni.local:27017/team07` | 3             |
| `KAFKA_BOOTSTRAP` | Kafka brokers                                                     | `hadoop-02:9092,hadoop-03:9092,hadoop-04:9092`            | 4, 9, 10      |
| `KAFKA_HOME`      | Kafka installation (scripts in `bin/`)                            | `/opt/kafka`                                              | 4, 9, 10      |
| `TRINO_SERVER`    | Trino coordinator URL                                             | `http://hadoop-01.uni.local:8080`                         | 6, 7, 13      |
| `CH_HOST`         | ClickHouse server host                                            | `hadoop-03.uni.local`                                     | 7             |
| `CH_PORT`         | ClickHouse native port                                            | `9010`                                                    | 7             |
| `FLINK_HOME`      | Flink installation; a session cluster runs on YARN                | `/opt/flink`                                              | 9             |
| `PG_HOST`         | PostgreSQL host (port 5432)                                       | `hadoop-01.uni.local`                                     | 10, 12        |
| `CONNECT_URL`     | Kafka Connect REST API                                            | `http://hadoop-01.uni.local:8083`                         | 10            |
| `SPARK_VERSION`   | Spark version (`spark-submit --version`)                          | `3.5.3`                                                   | 10            |
| `EMB_DIR`         | Local folder with precomputed embeddings                          | `/opt/datasets/embeddings`                                | 12            |
| `MODEL_DIR`       | Local copy of the `all-MiniLM-L6-v2` model (on every node)        | `/opt/models/all-MiniLM-L6-v2`                            | 12            |
| `MARQUEZ_URL`     | Marquez API (web UI on port 3000)                                 | `http://hadoop-01.uni.local:5000`                         | 14            |
| `OL_VERSION`      | OpenLineage Spark integration version                             | `1.25.0`                                                  | 14            |

> Inside Python strings, `USER` in a path such as `/tmp/USER/lab05` means your Linux user name (the value of `$USER` in the shell), which is the same as `TEAM_USER`.

## 5. First-time setup

Do this once, in the first lab.

```bash
ssh TEAM_USER@MASTER_HOST

# 1. Check that the tools are on your PATH
hdfs version | head -1
spark-submit --version 2>&1 | grep -m1 version
python3 -c "import pyspark, pyarrow, pandas; print('python ok')"

# 2. Kafka scripts on the PATH (add to ~/.bashrc)
echo 'export PATH=KAFKA_HOME/bin:$PATH' >> ~/.bashrc
echo 'export BS=KAFKA_BOOTSTRAP' >> ~/.bashrc
source ~/.bashrc

# 3. MinIO client alias "lab", used in weeks 1, 5 and 11
source ~/.minio_credentials
mc alias set lab http://MINIO_ENDPOINT "$MINIO_ACCESS_KEY" "$MINIO_SECRET_KEY"
mc ls lab

# 4. Your personal scratch folder on the entry node
mkdir -p /tmp/$USER
```

The standard way to start Spark in every lab, unless the guide says otherwise:

```bash
pyspark --master yarn --deploy-mode client \
        --num-executors 2 --executor-cores 2 --executor-memory 2g \
        --name "labNN-TEAM_USER"
```

The Iceberg catalog `lake`, the Iceberg SQL extensions, and access to MinIO through `s3a://` are already configured in `spark-defaults.conf`. You do not pass them yourself.

## 6. Naming rules: team and personal workspaces

Your team shares one Linux account, but each student works in their own names during tests. `SID` is your LMS student number.

| System                                  | Team space (lab work)                            | Personal space (tests)                             |
|-----------------------------------------|--------------------------------------------------|----------------------------------------------------|
| HDFS                                    | `/user/TEAM_USER/labNN/`                         | `/user/TEAM_USER/testNN/SID/`                      |
| MinIO                                   | buckets `TEAM_USER-labNN`                        | bucket `TEAM_USER-SID`                             |
| Iceberg (Spark `lake`, Trino `iceberg`) | namespace `TEAM_USER`: `lake.TEAM_USER.trips`, … | tables ending in `_SID`: `lake.TEAM_USER.t5_SID`   |
| Hive (Spark default catalog)            | tables starting with `TEAM_USER_`                | tables starting with `t6_SID_`                     |
| Kafka                                   | topics and groups starting with `TEAM_USER.`     | topics and groups starting with `TEAM_USER.SID.`   |
| Cassandra                               | keyspace `TEAM_USER`                             | tables ending in `_SID` in the same keyspace       |
| MongoDB                                 | database `TEAM_USER`                             | collections ending in `_SID`                       |
| ClickHouse                              | database `TEAM_USER`                             | tables ending in `_SID`                            |
| PostgreSQL                              | database `TEAM_USER`                             | tables ending in `_SID`; slot `TEAM_USER_SID_slot` |
| Kafka Connect                           | connectors starting with `TEAM_USER-`            | connector `TEAM_USER-SID`                          |
| Spark applications                      | `labNN-TEAM_USER`                                | `testNN-SID`                                       |

Names in Cassandra, Trino and PostgreSQL are case-insensitive and stored in lowercase unless quoted. Use lowercase everywhere.

## 7. Datasets

All labs use the same few datasets, so that you get to know them well. The main one is **NYC Yellow Taxi trips, January 2023** (about 3 million rows) from the [NYC TLC](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page).

### 7.1 Raw data (original TLC column names)

| Dataset            | Location                                                                                | Format                                                                                                                                                | Weeks   |
|--------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Trips, raw         | HDFS `/data/nyc_taxi/parquet/`                                                          | Parquet, 19 columns (`tpep_pickup_datetime`, `PULocationID`, `total_amount`, …). Includes a few rows dated outside January and some negative amounts. | 2, 5, 6 |
| Trips, raw, as CSV | `DATA_DIR/nyc_taxi/yellow_tripdata_2023-01.csv`                                         | CSV with header, same columns and order as the Parquet file (`PULocationID` is column 8)                                                              | 1       |
| Zone lookup, raw   | `DATA_DIR/nyc_taxi/taxi_zone_lookup.csv` and HDFS `/data/nyc_taxi/taxi_zone_lookup.csv` | CSV: `"LocationID","Borough","Zone","service_zone"`, 265 rows, quoted                                                                                 | 1, 2, 6 |

### 7.2 Course datasets (cleaned names, used from week 3)

The instructor prepared these from the raw file. They use one set of column names, which you will see in every table you build from week 4 on.

| Column         | Type                         | Raw TLC column                                                                     |
|----------------|------------------------------|------------------------------------------------------------------------------------|
| `trip_id`      | BIGINT                       | (added) 1, 2, 3, … in pickup order; the same trip has the same id in every dataset |
| `pickup_ts`    | TIMESTAMP_NTZ (no time zone) | `tpep_pickup_datetime`                                                             |
| `dropoff_ts`   | TIMESTAMP_NTZ (no time zone) | `tpep_dropoff_datetime`                                                            |
| `pu_zone_id`   | INT                          | `PULocationID`                                                                     |
| `do_zone_id`   | INT                          | `DOLocationID`                                                                     |
| `passengers`   | INT (nullable)               | `passenger_count`                                                                  |
| `distance`     | DOUBLE (miles)               | `trip_distance`                                                                    |
| `fare`         | DOUBLE (\$)                  | `fare_amount`                                                                      |
| `tip`          | DOUBLE (\$)                  | `tip_amount`                                                                       |
| `total`        | DOUBLE (\$)                  | `total_amount`                                                                     |
| `payment_type` | INT                          | `payment_type` (1 card, 2 cash, 3 no charge, 4 dispute, 0 unknown)                 |

| Dataset             | Location                                                                                  | Content                                                                                                              | Weeks           |
|---------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-----------------|
| `trips_all`         | HDFS `/data/nyc_taxi/trips_all/`                                                          | Every raw row, with the columns above. Not cleaned.                                                                  | 14              |
| `trips_jan`         | HDFS `/data/nyc_taxi/trips_jan/` and one local file `DATA_DIR/nyc_taxi/trips_jan.parquet` | Rows of `trips_all` with pickup in January 2023. Not otherwise cleaned.                                              | 4, 5, 7, 11, 13 |
| `zones`             | HDFS `/data/nyc_taxi/zones/` (Parquet) and `DATA_DIR/nyc_taxi/zones.csv`                  | `location_id, borough, zone, service_zone`                                                                           | 3, 4, 7         |
| `trips_sample_100k` | `DATA_DIR/nyc_taxi/trips_sample_100k.csv`                                                 | 100,000 rows of `trips_jan` (every 30th trip), all columns above; timestamps as `yyyy-MM-dd HH:mm:ss`                | 3, 4            |
| `trips_by_zone_day` | `DATA_DIR/nyc_taxi/trips_by_zone_day.csv`                                                 | The sample with columns `pu_zone_id, trip_date, pickup_ts, trip_id, do_zone_id, distance, total`                     | 3               |
| `trips_by_dropoff`  | `DATA_DIR/nyc_taxi/trips_by_dropoff.csv`                                                  | The sample with columns `do_zone_id, trip_date, dropoff_ts, trip_id, pu_zone_id, total` (`trip_date` = dropoff date) | 3 (test)        |

### 7.3 Other datasets

| Dataset         | Location                                                                          | Content                                                                                                           | Weeks |
|-----------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------|
| Ride events     | `DATA_DIR/streams/rides_ooo.jsonl` (lab), `rides_test.jsonl` (test)               | JSON lines `{"ride_id", "zone", "fare", "event_ts"}` in arrival order; about 10% arrive late                      | 9     |
| News embeddings | `EMB_DIR/corpus.parquet`, `EMB_DIR/queries.parquet`, and HDFS `/data/embeddings/` | 100,000 news texts (`id, category, text, emb`) and 1,000 queries (`qid, text, emb`); 384-dimensional unit vectors | 12    |

## 8. What carries over between weeks

Some things you build in one lab are used again later. Do not delete them.

| Object                                                     | Created in  | Used again in |
|------------------------------------------------------------|-------------|---------------|
| MinIO alias `lab`                                          | Lab 00 / 01 | 5, 11         |
| `lake.TEAM_USER.trips` (= `trips_jan`, partitioned by day) | Lab 04      | 5, 6, 7, 13   |
| `lake.TEAM_USER.zones`                                     | Lab 04      | 6, 7, 14      |
| Kafka scripts on your PATH, `$BS`                          | Lab 00      | 4, 9, 10      |

If you lost one of the Iceberg tables, rebuild it with the commands in Lab 04, Part E. Experiments that change data (deletes, schema changes, appends) are always done on copies such as `trips_evo` or `trips_scale`, so that `lake.TEAM_USER.trips` always holds exactly the January trips.

## 9. Sharing the cluster

- Spark: 2 executors × 2 cores × 2 GB unless the guide says otherwise. Call `spark.stop()` or exit the shell when you finish.
- Check your running applications with `yarn application -list | grep TEAM_USER`, and kill forgotten ones with `yarn application -kill <id>`.
- HDFS has a quota of 20 GB raw space per team. Check with `hdfs dfs -count -q -h /user/TEAM_USER`.
- Week 13 has booked time slots for the timing experiments. Do not run large jobs in another team's slot.
- Never stop services or nodes. If a service is down, tell the instructor.

## 10. Lab tests

1.  The test opens on the LMS at the end of the demo and lasts 30 minutes. It shows your **variant** (A–D) and its parameters. Your variant depends on your student number, so your neighbour has different values.
2.  Each of the 8 tasks is done on the cluster. Some ask you to type a result into the LMS (a number, a name, a short value). Others ask you to leave a result on the cluster: a file, table, topic, index or connector.
3.  Use only the personal names from [section 6](#naming), with your own `SID`. Results left under other names are not found by the checker and get no points.
4.  Results on the cluster are checked after the test closes. Do not delete or change them until the grades are published.
5.  You may use your notes, this page, the lab guides and the official documentation. You may not use other people's results or help from anyone else, including your teammates.
6.  If something on the cluster is broken during the test (a service is down, a quota is full), tell the instructor at once so that it is recorded.

## 11. Troubleshooting

| Symptom                                                         | Likely cause and fix                                                                                                                                         |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Spark shell waits at "ACCEPTED" and never starts                | The YARN queue is full. Check `YARN_UI`, kill your own forgotten applications, and ask for fewer executors.                                                  |
| `DSQuotaExceededException` on HDFS                              | Your team quota is full. Delete old lab output with `hdfs dfs -rm -r -skipTrash`, then `hdfs dfs -expunge`.                                                  |
| `Table or view not found: lake.TEAM_USER.trips`                 | The table was dropped or never created. Rebuild it with Lab 04, Part E.                                                                                      |
| `TopicAuthorizationException` in Kafka                          | The topic or group name does not start with `TEAM_USER.`                                                                                                     |
| Kafka commands fail with `--zookeeper`                          | The cluster runs KRaft. Use `--bootstrap-server $BS`.                                                                                                        |
| A Flink window query never prints anything                      | The watermark is not advancing: a Kafka partition is empty or idle. Use a one-partition topic in the labs, or set `table.exec.source.idle-timeout` (Lab 09). |
| Debezium connector fails with "replication slot already exists" | An old connector used the same slot name. Drop it: `SELECT pg_drop_replication_slot('…');`                                                                   |
| Cassandra rejects a query and suggests `ALLOW FILTERING`        | The query does not restrict the partition key. Change the table design rather than adding `ALLOW FILTERING` (Lab 03).                                        |
| ClickHouse `Authentication failed`                              | Use `--user TEAM_USER --password "$(cat ~/.clickhouse_password)"`.                                                                                           |

## 12. Clean-up rules

| What                                                               | When to delete                                                                                          |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Lab scratch output (`labNN/` folders, test topics, scratch tables) | At the end of each lab, unless section 8 says it carries over                                           |
| Test results (`testNN/SID`, `_SID` objects)                        | Only after the grades of that test are published                                                        |
| Debezium connectors and replication slots (Lab 10)                 | At the end of the lab, without exception: an unused slot keeps database logs forever and fills the disk |
| Running Spark, Flink or Python jobs                                | Before you leave the lab                                                                                |
