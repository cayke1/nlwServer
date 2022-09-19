import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

const prisma = new PrismaClient({
    log: ['query']
});
class AppController {
    public async listGames(req:Request, res:Response) {
        const games = await prisma.game.findMany({
            include: {
                _count: {
                    select: {
                        ads: true,
                    }
                }
            }
        });
        return res.json(games);
    }

    public async createNewAD(req:Request, res:Response) {
        const gameId = req.params.gameId;
        const body = req.body;

        const ad = await prisma.ad.create({
            data: {
                gameId,
                name: body.name,
                yearsPlaying: body.yearsPlaying,
                discord: body.discord,
                weekDays: body.weekDays.join(","),
                hourStart: convertHourStringToMinutes(body.hourStart),
                hourEnd: convertHourStringToMinutes(body.hourEnd),
                useVoiceChannel: body.useVoiceChannel
            }
        });

        return res.status(201).json(ad);
    }

    public async listAdsByGame(req:Request, res:Response) {
        const gameId = req.params.id;

        const ads = await prisma.ad.findMany({
            select: {
                id: true,
                name: true,
                weekDays: true,
                useVoiceChannel: true,
                yearsPlaying: true,
                hourStart: true,
                hourEnd: true,
            },
            where: {
                gameId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return res.status(200).json(ads.map(ad => {
            return {
                ...ad,
                weekDays: ad.weekDays.split(','),
                hourStart: convertMinutesToHourString(ad.hourStart),
                hourEnd: convertMinutesToHourString(ad.hourEnd),
            }
        }));
    }

    public async showDiscord(req:Request, res:Response) {
        const adId = req.params.id;

        const discordAd = await prisma.ad.findUniqueOrThrow({
            select: {
                discord: true
            },
            where: {
                id: adId,
            }
        });

        return res.status(200).json({
            discord: discordAd.discord
        });
    }
}

export default new AppController();