TRUNCATE TABLE OLE_DLVR_BATCH_JOB_T DROP STORAGE
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','3','deleteTemporaryHistoryRecordJob','3','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','4','generateRequestExpirationNoticeJob','4','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','5','deletingExpiredRequestsJob','5','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','6','generateOnHoldNoticeJob','6','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','7','updateStatusIntoAvailableAfterReShelvingJob','7','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','8','generateHoldCourtesyNoticeJob','8','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','9','generateCourtesyNoticesJob','9','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','10','generateOverdueNoticesJob','10','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 * * ?','11','generateLostNoticesJob','11','Y',1)
/
INSERT INTO OLE_DLVR_BATCH_JOB_T (JOB_CRON_EXPRSN,JOB_ID,JOB_TRG_NM,OBJ_ID,ROW_ACT_IND,VER_NBR)
  VALUES ('0 0 2 ? * SUN *','12','syncOleWithGOKbUpdatesJob','9','Y',1)
/
