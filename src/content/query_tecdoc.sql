






-- Хөдөлгүүрийн кодын дагуу Engine ID олж авна.
SELECT
	ENG.ID AS ENGINEID,
	ENG.DESCRIPTION,
	ENG.FULLDESCRIPTION,
	ENG.MANUFACTURERID 
FROM
	AMS2_ENGINES ENG 
WHERE
	ENG.ISENGINE = 'True' 
	AND ENG.CANBEDISPLAYED = 'True' 
	AND ENG.DESCRIPTION = '2AZ-FXE'
-- 2AZ-FXE = 19295 (Toyota) болно.


--Хөдөлгүүрийн ID дагуу таарах сэлбэгийн мод олж авна.
SELECT
	ETR.ENGINEID,
	ETR.ID AS NODEID,
	ETR.PARENTID,
	ETR.DESCRIPTION 
FROM
	AMS2_ENGINE_TREES ETR 
WHERE
	ETR.ENGINEID = 19295
-- 300001 NODEID-тай Фильтр жишээ нь гаргаж авна.


--PRODUCT буюу сэлбэгийн ерөнхий ID гаргаж авна.
SELECT
	EPDS.ENGINEID,
	EPDS.NODEID,
	EPDS.SUPPLIERID,
	EPDS.PRODUCTID,
	EPRD.* 
FROM
	AMS2_ENGINE_PDS EPDS
	LEFT JOIN AMS2_ENGINE_PRD EPRD ON EPDS.PRODUCTID = EPRD.ID 
WHERE
	EPDS.ENGINEID = 19295 
	AND EPDS.NODEID = 300001




-- ARTICLE_LINKS -ийн LINKAGETYPEID passangercar 2, engine 14, commercial 16, motorbike 777, axle 19


SELECT    			ALINKS.SUPPLIERID,
                ALINKS.PRODUCTID,
                ALINKS.LINKAGETYPEID,
                ALINKS.LINKAGEID,
                ALINKS.DATASUPPLIERARTICLENUMBER,
                EPRD.*,
                EPDS.*,
                SUP.*    
FROM      			AMS2_ARTICLE_LINKS ALINKS
LEFT JOIN 			AMS2_ENGINE_PDS EPDS ON 
								ALINKS.SUPPLIERID = EPDS.SUPPLIERID AND
							  ALINKS.PRODUCTID = EPDS.PRODUCTID AND
								ALINKS.LINKAGEID = EPDS.ENGINEID
LEFT JOIN 			AMS2_ENGINE_PRD EPRD ON EPDS.PRODUCTID = EPRD.ID
LEFT JOIN 			AMS2_SUPPLIERS  SUP  ON ALINKS.SUPPLIERID = SUP.ID
WHERE         	EPDS.ENGINEID = 19295 AND
                EPDS.NODEID = 300001 AND
                ALINKS.LINKAGETYPEID = 14 --ENGINE












--Машины тухайд
SELECT    PCTR.PASSANGERCARID,
                    PCTR.ID AS NODEID,
                    PCTR.PARENTID,
                    PCTR.DESCRIPTION,
                    PCTR.DESCRIPTION_MN
FROM      AMS2_PASSANGER_CAR_TREES PCTR
WHERE         PCTR.PASSANGERCARID = 25590

--100151 NODEID - Свечэ





SELECT *
FROM AMS2_PASSANGER_CAR_TREES
WHERE PASSANGERCARID = 25590


SELECT DISTINCT LINKAGETYPEID
FROM AMS2_ARTICLE_LI
WHERE SUPPLIERID = 350



SELECT pds.engineid, al.datasupplierarticlenumber part_number, prd.description product_name, s.description supplier_name
FROM ams2_article_links al 
JOIN ams2_engine_pds pds on al.supplierid = pds.supplierid
JOIN ams2_suppliers s on s.id = al.supplierid
JOIN ams2_engine_prd prd on prd.id = al.productid
WHERE al.productid = pds.productid
AND al.linkageid = pds.engineid
AND al.linkageid = 19295
AND pds.nodeid = 300001
AND al.linkagetypeid = 14
ORDER BY s.description, al.datasupplierarticlenumber

















SELECT  al.supplierid supplier_id,
                al.datasupplierarticlenumber part_number,
                s.description supplier_name,
                prd.*,
                img.*
FROM ams2_article_links al
JOIN ams2_passanger_car_pds pds on al.supplierid = pds.supplierid
JOIN ams2_suppliers s on s.id = al.supplierid
JOIN ams2_passanger_car_prd prd on prd.id = al.productid
JOIN ams2_article_images img on img.datasupplierarticlenumber = al.datasupplierarticlenumber

WHERE al.productid = pds.productid
        AND al.linkageid = pds.passangercarid
        AND al.linkageid = 25590
        AND pds.nodeid = 100259
        AND al.linkagetypeid = 2
ORDER BY s.description, al.datasupplierarticlenumber



-- 25590 Toyota Alphard H1













SELECT     ARTLI.*,
                     PCARS.*
FROM       AMS2_ARTICLE_LI ARTLI
LEFT JOIN  AMS2_PASSANGER_CARS PCARS ON ARTLI.LINKAGEID = PCARS.ID
WHERE      ARTLI.DATASUPPLIERARTICLENUMBER       = '6711' AND
                     ARTLI.SUPPLIERID                      = 15 AND
                     ARTLI.LINKAGETYPEID                   = 'PassengerCar'












SELECT    DISTINCT DESCRIPTION
FROM             AMS2_SUPPLIERS
ORDER BY  DESCRIPTION ASC








-- Cross-reference
SELECT         AC.*,
                    M.*,
                    S.*
FROM        AMS2_ARTICLE_CROSS AC
LEFT JOIN AMS2_MANUFACTURERS M ON AC.MANUFACTURERID = M.ID
LEFT JOIN AMS2_SUPPLIERS S ON AC.SUPPLIERID = S.ID

WHERE         AC.OENBR = '90919-01237' OR
                    AC.PARTSDATASUPPLIERARTICLENUMBER = '90919-01237'



-- Parts of articles

SELECT DISTINCT
                    S.DESCRIPTION AS BRAND,
                    AP.PARTSDATASUPPLIERARTICLENUMBER AS NUMBERS,
                    AP.QUANTITY AS QTY 
FROM          AMS2_ARTICLE_PARTS AP
LEFT JOIN AMS2_SUPPLIERS S ON S.ID = AP.PARTSSUPPLIERID 

WHERE            S.DESCRIPTION = 'HELLA' AND
                    AP.DATASUPPLIERARTICLENUMBER = '1A3 002 850-031'




-- Applicability OEM:
SELECT DISTINCT
                S.DESCRIPTION AS BRANDANALOG,
                AOE.DATASUPPLIERARTICLENUMBER AS NUMBERANALOG,
                M.DESCRIPTION AS OEMBRAND,
                AOE.OENBR AS OEMNUMBER,
                PC.FULLDESCRIPTION AS CAR,
                PC.CONSTRUCTIONINTERVAL AS YEARS,
                                PC.*
FROM            AMS2_ARTICLE_OE AOE
LEFT JOIN       AMS2_SUPPLIERS S       ON S.ID = AOE.SUPPLIERID
LEFT JOIN       AMS2_MANUFACTURERS M   ON M.ID = AOE.MANUFACTURERID
LEFT JOIN       AMS2_ARTICLE_LINKS AL  ON AL.SUPPLIERID = AOE.SUPPLIERID AND AL.DATASUPPLIERARTICLENUMBER = AOE.DATASUPPLIERARTICLENUMBER
LEFT JOIN       AMS2_PASSANGER_CARS PC ON PC.ID = AL.LINKAGEID
LEFT JOIN       AMS2_MODELS M          ON PC.MODELID = M.ID
WHERE           AOE.OENBR='28800'



-- ZFR6K-11 NGK свечэ 
-- Очлуур - NGK Энгийн NGK 6711 ZFR6K-11



-- SELECT DISTINCT NORMALIZEDDESCRIPTION
SELECT *
FROM AMS2_ARTICLES
WHERE SUPPLIERID = 15 AND NORMALIZEDDESCRIPTION = 'Свеча зажигания'
ORDER BY DATASUPPLIERARTICLENUMBER



SELECT *
FROM AMS2_ARTICLES
WHERE DATASUPPLIERARTICLENUMBER = '6711' AND SUPPLIERID = 15


SELECT ART.* FROM AMS2_ARTICLES ART WHERE ART.DATASUPPLIERARTICLENUMBER = '6711' AND ART.SUPPLIERID = 15


                    SELECT   SUP.*
                    FROM     AMS2_SUPPLIERS SUP
                    WHERE    SUP.ID = 15




SELECT     CRO.*,
                     MAN.*
FROM       AMS2_ARTICLE_CROSS CRO
LEFT JOIN  AMS2_MANUFACTURERS MAN ON CRO.MANUFACTURERID = MAN.ID
WHERE      CRO.PARTSDATASUPPLIERARTICLENUMBER = '6711' AND
                     CRO.SUPPLIERID = 15 AND
                     MAN.ISPASSENGERCAR = 'True'



SELECT     ARTATT.*
FROM       AMS2_ARTICLE_ATTRIBUTES ARTATT
WHERE      ARTATT.DATASUPPLIERARTICLENUMBER = '6711' AND
                     ARTATT.SUPPLIERID = 15
